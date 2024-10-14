package com.example.demo.cocktail_db.cocktail;

import com.example.demo.domain.user.User;
import com.example.demo.domain.user.dto.UserDTO;
import com.example.demo.domain.user.dto.UserRegisterDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/cocktail")
public class CocktailController {

    private final CocktailService cocktailService;

    @Autowired
    public CocktailController(CocktailService cocktailService) {
        this.cocktailService = cocktailService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cocktail> retrieveById(@PathVariable UUID id) {
        return new ResponseEntity<>(cocktailService.findById(id), HttpStatus.OK);
    }

    @GetMapping({"", "/"})
    public ResponseEntity<List<Cocktail>> retrieveAll() {
        return new ResponseEntity<>(cocktailService.findAll(), HttpStatus.OK);
    }

    @PostMapping({"", "/"})
    public ResponseEntity<Cocktail> createCocktail(@Valid @RequestBody Cocktail cocktail) {
        return new ResponseEntity<>(cocktailService.save(cocktail), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cocktail> updateById(@PathVariable UUID id, @Valid @RequestBody Cocktail cocktail) {
        return new ResponseEntity<>(cocktailService.updateById(id, cocktail), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable UUID id) {
        cocktailService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
