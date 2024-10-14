package com.example.demo.core.security.permissionevaluators;

import com.example.demo.domain.user.User;
import org.springframework.stereotype.Component;

@Component
public class UserPermissionEvaluator {

  public UserPermissionEvaluator() {
  }

  public boolean isUserAboveAge(User principal, int age) {
    return true;
  }

}
