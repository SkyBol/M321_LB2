package com.example.demo.core.generic;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.UUID;

import com.example.demo.core.generic.filter.DynamicFilter;
import org.springframework.data.domain.Pageable;

public interface AbstractService<T extends AbstractEntity> {

  T save(T entity);

  void deleteById(UUID id) throws NoSuchElementException;

  T updateById(UUID id, T entity) throws NoSuchElementException;

  List<T> findAll();

  List<T> findAll(Pageable pageable);

  List<T> findAll(DynamicFilter filter);

  List<T> findAll(Map<String, String> filter, Pageable pageable);

  List<T> findAll(DynamicFilter filter, Pageable pageable);

  T findById(UUID id);

  boolean existsById(UUID id);

}
