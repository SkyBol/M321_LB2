package com.example.demo.cocktail_db.cocktail;

import com.example.demo.core.generic.AbstractServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CocktailServiceImpl extends AbstractServiceImpl<Cocktail> implements CocktailService {
    @Autowired
    public CocktailServiceImpl(CocktailRepository repository) {
        super(repository);
    }
}
