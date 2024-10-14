package com.example.demo.domain.storage;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter@Setter
@ConfigurationProperties("storage")
@Component
public class StorageConfig {
    /**
     * Folder location for storing files
     */
    private String location = "storage";

    /**
     * Pepper for the files
     */
    private String pepper = "examplePepper";
}
