
exports.seed = function(knex) {
  return knex("ingredient_lists")
    .del()
    .then(function() {
      return knex("ingredient_lists").insert([
        { recipe_id: 1, ingredient_id: 1,  quantity:1  },
        { recipe_id: 1, ingredient_id: 2,  quantity:0.75},
        { recipe_id: 1, ingredient_id: 3,  quantity:1  },
        { recipe_id: 1, ingredient_id: 4,  quantity:2  },
        { recipe_id: 1, ingredient_id: 5,  quantity:2  },
        { recipe_id: 1, ingredient_id: 6,  quantity:2  },
        { recipe_id: 1, ingredient_id: 7,  quantity:3  },
        { recipe_id: 1, ingredient_id: 8,  quantity:1  },
        { recipe_id: 1, ingredient_id: 9,  quantity:1  },
        { recipe_id: 2, ingredient_id: 1,  quantity:2  },
        { recipe_id: 2, ingredient_id: 2,  quantity:2  },
        { recipe_id: 2, ingredient_id: 3,  quantity:1  },
        { recipe_id: 3, ingredient_id: 1,  quantity:10 },
        { recipe_id: 3, ingredient_id: 2,  quantity:200},
        { recipe_id: 3, ingredient_id: 3,  quantity:115},
        { recipe_id: 3, ingredient_id: 4,  quantity:100},
        { recipe_id: 3, ingredient_id: 5,  quantity:100},
        { recipe_id: 3, ingredient_id: 6,  quantity:100},
        { recipe_id: 3, ingredient_id: 7,  quantity:2},
        { recipe_id: 3, ingredient_id: 8,  quantity:2},
       
      ]);
    });
};