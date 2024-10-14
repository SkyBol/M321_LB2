package com.example.demo.domain.storage.util;

import javax.crypto.*;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;

public class EnDeCrypter {
    private final Cipher cipher;
    private final SecretKeySpec secretKeySpec;

    public EnDeCrypter(String password, String salt) throws NoSuchPaddingException, NoSuchAlgorithmException, InvalidKeySpecException {
        this.cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");

        byte[] hashedPassword = Hasher.hash256(password, salt);

        this.secretKeySpec = new SecretKeySpec(hashedPassword, "AES");
    }

    public byte[] encrypt(byte[] fileInput) throws IllegalBlockSizeException, BadPaddingException, InvalidKeyException {
        return crypt(fileInput, Cipher.ENCRYPT_MODE);
    }

    public byte[] decrypt(byte[] fileInput) throws IllegalBlockSizeException, BadPaddingException, InvalidKeyException {
        return crypt(fileInput, Cipher.DECRYPT_MODE);
    }

    private byte[] crypt(byte[] fileInput, int optmode) throws IllegalBlockSizeException, BadPaddingException, InvalidKeyException {
        cipher.init(optmode, this.secretKeySpec);
        return cipher.doFinal(fileInput);
    }
}
