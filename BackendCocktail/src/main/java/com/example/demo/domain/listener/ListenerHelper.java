package com.example.demo.domain.listener;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import lombok.extern.log4j.Log4j2;
import org.webjars.NotFoundException;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Log4j2
public class ListenerHelper {
    private static final Gson gson = new Gson();

    public static String getURIPart(RequestObject requestObject, int requestIndex) {
        String[] path = requestObject.getRequest().getRequestURI().split("/");
        List<String> filteredList = Arrays.stream(path).filter(val -> !(val.isBlank() || val.isEmpty())).toList();
        try {
            String key = filteredList.get(requestIndex + 1);
            if (key.isEmpty() || key.isBlank()) {
                log.info("No ID Found for " + requestObject.getRequest().getRequestURI() + " at index " + requestIndex + 1);
                return "";
                //throw new NotFoundException("Error while reading the api-Key from the Request-URI");
            }
            return key;
        } catch (ArrayIndexOutOfBoundsException e) {
            return "";
        }
    }
    public static String getApiKey(RequestObject requestObject) throws NotFoundException {
        return getURIPart(requestObject, 0);
    }
    public static UUID getObjectId(RequestObject requestObject) throws NotFoundException {
        return UUID.fromString(getURIPart(requestObject, 1));
    }
    public static Listener buildListenerObject(RequestObject requestObject, boolean setId) {
        Listener listenerObject = new Listener();
        listenerObject.setApiKey(getApiKey(requestObject));
        listenerObject.setValue(gson.toJson(requestObject.getPayload()));
        if (setId) {
            listenerObject.setId(getObjectId(requestObject));
        }

        return listenerObject;
    }

    public static boolean isFindAll(RequestObject requestObject) {
        String id = getURIPart(requestObject, 1);
        return id.isBlank() || id.isEmpty();
    }

    public static String listenerValueWithId(Listener listener) {
        JsonElement jsonElement = gson.toJsonTree(gson.fromJson(listener.getValue(), JsonObject.class));
        jsonElement.getAsJsonObject().addProperty("id", String.valueOf(listener.getId()));
        return gson.toJson(jsonElement);
    }

    public static String listenerValueWithId(List<Listener> listeners) {
        return "[" + listeners.stream().map(ListenerHelper::listenerValueWithId).collect(Collectors.joining(", ")) + "]";
    }
}
