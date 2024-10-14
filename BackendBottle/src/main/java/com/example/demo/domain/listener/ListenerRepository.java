package com.example.demo.domain.listener;

import com.example.demo.core.generic.AbstractRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ListenerRepository extends AbstractRepository<Listener> {
    Optional<Listener> findByIdAndApiKey(UUID uuid, String apiKey);
    List<Listener> findAllByApiKey(String apiKey);
}
