package com.example.demo.core.generic.filter;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import jakarta.persistence.metamodel.EntityType;
import org.springframework.data.jpa.domain.Specification;

import java.lang.reflect.Field;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Map;

public abstract class AbstractSpecifications {
  private enum FilterType {
    LIKE,
    BEFORE,
    AFTER,
    IN,
    NONE
  }

  private static String normaliseFieldKeyFilter(String fieldKey) {
    if (fieldKey == null || fieldKey.length() == 0) {
      return "";
    }

    return switch (getFilterType(fieldKey)) {
      case LIKE -> fieldKey.substring(0, fieldKey.length() - "Like".length());
      case BEFORE -> fieldKey.substring(0, fieldKey.length() - "Before".length());
      case AFTER -> fieldKey.substring(0, fieldKey.length() - "After".length());
      case IN -> fieldKey.substring(0, fieldKey.length() - "In".length());
      case NONE -> fieldKey;
    };
  }

  private static FilterType getFilterType(String fieldKey) {
    if (fieldKey.endsWith("Like")) {
      return FilterType.LIKE;
    } else if (fieldKey.endsWith("Before")) {
      return FilterType.BEFORE;
    } else if (fieldKey.endsWith("After")) {
      return FilterType.AFTER;
    } else if (fieldKey.endsWith("In")) {
      return FilterType.IN;
    } else {
      return FilterType.NONE;
    }
  }

  private static boolean fieldKeyBelongsToPagination(String fieldKey) {
    return switch (fieldKey) {
      case "page", "size", "sort" -> true;
      default -> false;
    };
  }

  public static <T> Specification<T> filter(DynamicFilter filter) {
    return (Root<T> root, CriteriaQuery<?> query, CriteriaBuilder cb) -> {
      Predicate predicate = cb.conjunction();

      if (filter == null) {
        return predicate;
      }

      EntityType<T> entityType = root.getModel();

      for (Map.Entry<String, String> entry : filter.entrySet()) {
        String fieldKey = entry.getKey();
        String value = entry.getValue();

        if (fieldKeyBelongsToPagination(fieldKey)) {
          continue;
        }

        String normalisedFieldKey = normaliseFieldKeyFilter(fieldKey);

        try {
          Class<?> entityClass = entityType.getJavaType();
          Field field = entityClass.getDeclaredField(normalisedFieldKey);

          if (field.isAnnotationPresent(IgnoreFilter.class)) {
            continue;
          }
        } catch (NoSuchFieldException e) {
          continue;
        }

        switch (getFilterType(fieldKey)) {
          case LIKE -> predicate = cb.and(predicate, cb.like(root.get(normalisedFieldKey), "%" + value + "%"));
          case BEFORE -> predicate = cb.and(predicate, cb.lessThan(root.get(normalisedFieldKey), LocalDate.parse(value)));
          case AFTER -> predicate = cb.and(predicate, cb.greaterThan(root.get(normalisedFieldKey), LocalDate.parse(value)));
          case IN -> predicate = cb.and(predicate, root.get(normalisedFieldKey).in(Arrays.asList(value.split(","))));
          case NONE -> predicate = cb.and(predicate, cb.equal(root.get(normalisedFieldKey), value));
        }
      }

      return predicate;
    };
  }
}
