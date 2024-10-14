package com.example.demo.cocktail_db.category;

import com.example.demo.core.generic.AbstractEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Accessors(chain = true)
public class Category extends AbstractEntity {

    @Column(name = "name")
    private String name;
}
