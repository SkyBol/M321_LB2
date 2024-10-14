package com.example.demo.domain.authority.dto;

import com.example.demo.core.generic.AbstractMapper;
import com.example.demo.domain.authority.Authority;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AuthorityMapper extends AbstractMapper<Authority, AuthorityDTO> {
}

