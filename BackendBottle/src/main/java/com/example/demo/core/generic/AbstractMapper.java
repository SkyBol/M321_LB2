package com.example.demo.core.generic;

import java.util.List;
import java.util.Set;

public interface AbstractMapper<BO extends AbstractEntity, DTO extends AbstractDTO> {

  BO fromDTO(DTO dto);

  List<BO> fromDTOs(List<DTO> dtos);

  Set<BO> fromDTOs(Set<DTO> dtos);

  DTO toDTO(BO BO);

  List<DTO> toDTOs(List<BO> BOs);

  Set<DTO> toDTOs(Set<BO> BOs);
}
