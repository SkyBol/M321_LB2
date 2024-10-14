package com.example.demo.domain.user;

import com.example.demo.core.generic.AbstractRepository;
import java.util.Optional;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends AbstractRepository<User> {
  Optional<User> findByEmail(String email);
}
