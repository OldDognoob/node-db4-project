
exports.seed = function(knex) {
  return knex("ingredient_lists")
    .del()
    .then(function() {
      return knex("ingredient_lists").insert([
        { recipe_id:  ingredient_id:   quantity:  },
       
      ]);
    });
};