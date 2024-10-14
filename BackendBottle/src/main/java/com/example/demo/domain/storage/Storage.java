package com.example.demo.domain.storage;

import com.example.demo.core.generic.AbstractEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "storage")
@NoArgsConstructor
@AllArgsConstructor
@Getter@Setter
public class Storage extends AbstractEntity {
    @Column(name = "fileName", nullable = false)
    private String fileName;

    @Column(name = "fileType", nullable = false)
    private String fileType;

    @Column(name = "encryptionKey", nullable = false)
    private String key;

    @Column(name = "salt", nullable = false, unique = true)
    private String salt;

    @Column(name = "original_file_checksum", nullable = false)
    private String originalFileChecksum;

    // If this is null, the file isn't saved on the server
    @Column(name = "encrypted_file_checksum", nullable = true)
    private String encryptedFileChecksum;
}
