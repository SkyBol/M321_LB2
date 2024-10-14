package com.example.demo.cocktail_db.cocktail;

import com.example.demo.cocktail_db.category.Category;
import com.example.demo.cocktail_db.ingredient.Ingredient;
import com.example.demo.core.generic.AbstractEntity;
import com.example.demo.domain.storage.Storage;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.Set;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Accessors(chain = true)
public class Cocktail extends AbstractEntity {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "img_id")
    private String img_id;

    @Column(name = "glass")
    private String glass;

    @Column(name = "alcoholic")
    private Boolean alcoholic;

    @Column(name = "instructions", length = 10000)
    private String instructions;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "cocktail_category", joinColumns = @JoinColumn(name = "users_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private Set<Category> category;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "cocktails")
    @JsonManagedReference
    private Set<Ingredient> ingredients;
}
