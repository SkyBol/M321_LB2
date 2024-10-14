package com.example.demo.core.security.helpers;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("jwt")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class JwtProperties {

  private long expirationMillis;
  private String issuer;
  private String secret;

}
