package com.example.demo.domain.storage;

import com.example.demo.core.exception.custom.StorageException;
import com.example.demo.core.generic.AbstractServiceImpl;
import com.example.demo.domain.storage.util.EnDeCrypter;
import com.example.demo.domain.storage.util.Hasher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;

import java.io.*;

import org.springframework.security.crypto.keygen.KeyGenerators;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import org.springframework.web.multipart.MultipartFile;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Objects;
import java.util.UUID;


@Service
public class StorageServiceImpl extends AbstractServiceImpl<Storage> implements StorageService {
    private final StorageConfig properties;

    @Autowired
    public StorageServiceImpl(StorageRepository storageRepository, StorageConfig properties) {
        super(storageRepository);
        this.properties = properties;
    }

    @Override
    public Storage store(MultipartFile file) {
        try {
            // Create Storage Object (with an ID)
            Storage newStorage = buildStorageObject(file);

            // Get location of File Storage
            Path location = Path.of(this.properties.getLocation()).toAbsolutePath();

            // get Location of file Save
            Path destinationFile = createDestinationPathAndCheckLocation(file, location, String.valueOf(newStorage.getId()));

            if (!destinationFile.getParent().equals(location)) {
                // This is a security check
                throw new StorageException("Cannot store file outside current directory");
            }

            // Encryption
            try (FileOutputStream fileOutputStream = new FileOutputStream(destinationFile.toFile())) {
                EnDeCrypter enCrypter = new EnDeCrypter(newStorage.getKey(), newStorage.getSalt());
                byte[] encryptedFile = enCrypter.encrypt(file.getInputStream().readAllBytes());

                fileOutputStream.write(encryptedFile);
                newStorage.setEncryptedFileChecksum(DigestUtils.md5DigestAsHex(encryptedFile));
            } catch (Exception e) {
                throw new StorageException("Encountered a Problem during File Encryption", e);
            }

            return this.updateById(newStorage.getId(), newStorage);
        } catch (Exception e) {
            throw new StorageException("Error during file save", e);
        }
    }

    private Path createDestinationPathAndCheckLocation(MultipartFile file, Path location, String storageId) throws IOException {
        // Check if File is Empty
        if (file.isEmpty() || Objects.requireNonNull(file.getOriginalFilename()).isEmpty()) {
            throw new StorageException("Failed to store empty file");
        } else if (!Files.exists(location)) {
            Files.createDirectories(location);
        }

        return location
                .resolve(Paths.get(storageId))
                .normalize().toAbsolutePath();
    }
    private Storage buildStorageObject(MultipartFile file) throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
        Storage newStorage = new Storage();

        newStorage.setFileName(file.getOriginalFilename());
        newStorage.setFileType(file.getContentType());
        newStorage.setSalt(KeyGenerators.string().generateKey()); // Random for every Storage

        // Hash of Original File
        newStorage.setOriginalFileChecksum(DigestUtils.md5DigestAsHex(file.getInputStream()));

        // A key to encrypt the file:
        //   Hash from filename and salt
        byte[] keyHashed = Hasher.hash256(newStorage.getFileName(), newStorage.getSalt());
        newStorage.setKey(new String(keyHashed, StandardCharsets.UTF_8));

        return save(newStorage);
    }

    @Override
    public ByteArrayResource getFileAsResource(UUID storageId) {
        // Get Storage Object
        Storage storage = findById(storageId);

        // Check if checksum exists
        if (storage.getEncryptedFileChecksum() == null) {
            throw new StorageException("Checksum of encrypted file is null! Did it not save during upload?");
        }

        // Get location of File Storage
        Path location = Path.of(this.properties.getLocation()).toAbsolutePath();

        // Get File location
        Path file = location
                .resolve(String.valueOf(storage.getId()))
                .normalize().toAbsolutePath();

        // Decryption
        try (InputStream inputStream = new FileInputStream(file.toFile())) {
            byte[] encryptedFileBytes = inputStream.readAllBytes();
            if (!storage.getEncryptedFileChecksum().equals(DigestUtils.md5DigestAsHex(encryptedFileBytes))) {
                throw new StorageException("Encrypted checksum doesn't match! When saved was '" + storage.getEncryptedFileChecksum() + "' but now is: '" + DigestUtils.md5DigestAsHex(inputStream) + "'");
            }

            EnDeCrypter deCrypter = new EnDeCrypter(storage.getKey(), storage.getSalt());
            byte[] decryptedFile = deCrypter.decrypt(encryptedFileBytes);

            // Check if decryption was successful
            if (!storage.getOriginalFileChecksum().equals(DigestUtils.md5DigestAsHex(decryptedFile))) {
                throw new StorageException("Decrypted checksum doesn't match! When saved was '" + storage.getOriginalFileChecksum() + "' but now is: '" + DigestUtils.md5DigestAsHex(decryptedFile) + "'");
            }
            return new ByteArrayResource(decryptedFile);
        } catch (Exception e) {
            throw new StorageException("Error during loading of saved file", e);
        }
    }

    @Override
    public void deleteFile(UUID fileId) {
        Storage storage = findById(fileId);

        // Get location of File Storage
        Path location = Path.of(this.properties.getLocation()).toAbsolutePath();

        // Get File location
        Path file = location
                .resolve(String.valueOf(storage.getId()))
                .normalize().toAbsolutePath();

        if (!file.toFile().exists() || !file.toFile().delete()) {
            throw new StorageException("Couldn't delete File on Server");
        }

        deleteById(storage.getId());
    }
}
