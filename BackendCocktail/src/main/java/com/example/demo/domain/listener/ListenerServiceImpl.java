package com.example.demo.domain.listener;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.NoSuchElementException;

@Service
@Log4j2
public class ListenerServiceImpl implements ListenerService {
    @Autowired
    private ListenerRepository repository;

    public String apiCall(RequestObject requestObject) {
         return switch (requestObject.getRequest().getMethod()) {
            case "GET" -> findAllOrById(requestObject);
            case "POST" -> save(requestObject);
            case "PUT" -> updateById(requestObject);
            case "DELETE" -> deleteById(requestObject);
            default -> throw new NotFoundException("Method not supported (yet)");
        };
    }

    @Override
    public String save(RequestObject requestObject) {
        Listener listener = ListenerHelper.buildListenerObject(requestObject, false);
        return ListenerHelper.listenerValueWithId(repository.save(listener));
    }
    @Override
    public String deleteById(RequestObject requestObject) throws NoSuchElementException {
        Listener listener = ListenerHelper.buildListenerObject(requestObject, true);
        repository.deleteById(listener.getId());
        return "";
    }
    @Override
    public String updateById(RequestObject requestObject) throws NoSuchElementException {
        Listener listener = ListenerHelper.buildListenerObject(requestObject, true);
        if (!repository.existsById(listener.getId())) {
            throw new NoSuchElementException("Not Found: " + listener.getId());
        }
        return ListenerHelper.listenerValueWithId(repository.save(listener));
    }
    @Override
    public String findAllOrById(RequestObject requestObject) {
        if (ListenerHelper.isFindAll(requestObject)) {
            return ListenerHelper.listenerValueWithId(
                    repository.findAllByApiKey(
                            ListenerHelper.getApiKey(requestObject)
                    )
            );
        } else {
            return ListenerHelper.listenerValueWithId(
                    repository.findByIdAndApiKey(
                        ListenerHelper.getObjectId(requestObject),
                        ListenerHelper.getApiKey(requestObject)
                    ).orElseThrow()
            );
        }
    }

}
