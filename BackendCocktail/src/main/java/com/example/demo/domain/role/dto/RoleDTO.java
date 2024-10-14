package com.example.demo.domain.role.dto;

import com.example.demo.core.generic.AbstractDTO;
import com.example.demo.domain.authority.dto.AuthorityDTO;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.Set;
import java.util.UUID;

@NoArgsConstructor
@Setter
@Getter
@Accessors(chain = true)
public class RoleDTO extends AbstractDTO {

  @NotNull
  @Size(min = 1, max = 255)
  private String name;

  @Valid
  private Set<AuthorityDTO> authorities;

  public RoleDTO(UUID id, String name, Set<AuthorityDTO> authorities) {
    super(id);
    this.name = name;
    this.authorities = authorities;
  }

}