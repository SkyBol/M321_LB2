package com.example.demo.domain.role.dto;

import com.example.demo.core.generic.AbstractMapper;
import com.example.demo.domain.role.Role;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RoleMapper extends AbstractMapper<Role, RoleDTO> {
}
