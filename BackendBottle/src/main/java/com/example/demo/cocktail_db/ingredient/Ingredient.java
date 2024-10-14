package com.example.demo.cocktail_db.ingredient;

import com.example.demo.cocktail_db.cocktail.Cocktail;
import com.example.demo.core.generic.AbstractEntity;
import com.example.demo.domain.listener.Listener;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Accessors(chain = true)
public class Ingredient extends AbstractEntity {

    @ManyToOne
    @JoinColumn(name = "cocktail_id", nullable = false)
    @JsonBackReference
    private Cocktail cocktails;

    @ManyToOne
    private Listener bottles;

    // This will be used, if a bottle can not be found and instead is just a String from the User
    @Column(name = "bottle_string_alternative")
    private String bottleStringAlternative;

    @Column(name = "amount")
    private String amount;
}
