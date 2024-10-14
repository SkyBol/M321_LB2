package com.example.demo.domain.authority.dto;

import com.example.demo.core.generic.AbstractDTO;
import java.util.UUID;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@NoArgsConstructor
@Getter
@Setter
@Accessors(chain = true)
public class AuthorityDTO extends AbstractDTO {

  @NotNull
  @Size(min = 1, max = 255)
  private String name;

  public AuthorityDTO(UUID id, String name) {
    super(id);
    this.name = name;
  }

}
