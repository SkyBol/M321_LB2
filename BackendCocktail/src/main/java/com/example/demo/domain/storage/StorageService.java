package com.example.demo.domain.storage;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

public interface StorageService {
    Storage store(MultipartFile file);

    ByteArrayResource getFileAsResource(UUID storageId);

    void deleteFile(UUID fileId);
}
