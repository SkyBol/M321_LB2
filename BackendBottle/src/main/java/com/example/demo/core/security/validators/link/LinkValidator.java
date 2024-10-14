package com.example.demo.core.security.validators.link;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.apache.commons.validator.routines.UrlValidator;
import org.springframework.stereotype.Component;

@Component
public class LinkValidator implements ConstraintValidator<Link, String> {

  @Override
  public boolean isValid(String value, ConstraintValidatorContext context) {
    UrlValidator urlValidator = new UrlValidator(new String[] {"http", "https"});

    return urlValidator.isValid(value);
  }
}




