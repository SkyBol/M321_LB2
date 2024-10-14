package com.example.demo.core.exception;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Map;

@NoArgsConstructor
@Getter
@Setter
@Accessors(chain = true)
public class ResponseError implements Serializable {
  private LocalDate timeStamp;
  private Map<String, String> errors;

  public ResponseError build() {
    return this;
  }
}
