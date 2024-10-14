package com.example.demo.domain.listener;

import java.util.NoSuchElementException;

public interface ListenerService {
    String apiCall(RequestObject requestObject);

    String save(RequestObject requestObject);
    String deleteById(RequestObject requestObject) throws NoSuchElementException;
    String updateById(RequestObject requestObject) throws NoSuchElementException;
    String findAllOrById(RequestObject requestObject);
}
