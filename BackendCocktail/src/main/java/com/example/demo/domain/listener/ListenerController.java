package com.example.demo.domain.listener;

import com.google.gson.Gson;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/call/")
public class ListenerController {
    @Autowired
    private ListenerService listenerService;

    /**
     * findAll:    /call/${key}/
     * findById:   /call/${key}/${id}
     * create:     /call/${key}/
     * updateById: /call/${key}/${id}
     * deleteById: /call/${key}/${id}
     * <p>
     * A key cannot access another key
     * @returns a string representation of the Object
     */

    @RequestMapping("**")
    public ResponseEntity<String> apiCall(
            @RequestBody(required = false) Map<String, Object> payload,
            @RequestParam Map<String, Object> params,
            @RequestHeader Map<String, String> headers,
            HttpServletRequest request
    ) {
        RequestObject requestObject = new RequestObject(payload, params, headers, request);
        return ResponseEntity.ok(listenerService.apiCall(requestObject));
    }

}
