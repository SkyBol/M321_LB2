package com.example.demo.core.generic;

import java.util.*;

import com.example.demo.core.generic.filter.AbstractSpecifications;
import com.example.demo.core.generic.filter.DynamicFilter;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

@AllArgsConstructor
public abstract class AbstractServiceImpl<T extends AbstractEntity> implements AbstractService<T> {

  protected final AbstractRepository<T> repository;

  @Override
  public T save(T entity) {
    return repository.save(entity);
  }

  @Override
  public void deleteById(UUID id) throws NoSuchElementException {
    if (repository.existsById(id)) {
      repository.deleteById(id);
    } else {
      throw new NoSuchElementException(String.format("Entity with ID '%s' could not be found", id));
    }
  }

  @Override
  public T updateById(UUID id, T entity) throws NoSuchElementException {
    if (repository.existsById(id)) {
      entity.setId(id);
      return repository.save(entity);
    } else {
      throw new NoSuchElementException(String.format("Entity with ID '%s' could not be found", id));
    }
  }

  @Override
  public List<T> findAll() {
    return findAll(null, null);
  }

  @Override
  public List<T> findAll(Pageable pageable) {
    return findAll(null, pageable);
  }

  @Override
  public List<T> findAll(DynamicFilter filter) {
    return findAll(filter, null);
  }

  @Override
  public List<T> findAll(Map<String, String> filter, Pageable pageable) {
    DynamicFilter dynamicFilter = new DynamicFilter();
    if (filter != null && !filter.isEmpty()) {
      dynamicFilter.putAll(filter);
    }
    return findAll(dynamicFilter, pageable);
  }

  @Override
  public List<T> findAll(DynamicFilter filter, Pageable pageable) {
    Specification<T> specification = AbstractSpecifications.filter(filter);

    if (pageable == null) {
      return repository.findAll(specification);
    } else {
      Page<T> pagedResult = repository.findAll(specification, pageable);
      return pagedResult.hasContent() ? pagedResult.getContent() : new ArrayList<>();
    }
  }

  @Override
  public T findById(UUID id) {
    return repository.findById(id).orElseThrow(NoSuchElementException::new);
  }

  @Override
  public boolean existsById(UUID id) {
    return repository.existsById(id);
  }


}
