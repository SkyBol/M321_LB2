package com.example.demo.domain.listener;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@AllArgsConstructor
@Getter
@Setter
public class RequestObject {
    private Map<String, Object> payload;
    private Map<String, Object> params;
    private Map<String, String> headers;
    private HttpServletRequest request;
}
