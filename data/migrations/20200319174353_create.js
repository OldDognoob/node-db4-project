exports.up = function(knex) {
  return knex.schema
    .creatTable("recipes", table => {
      table.increments();
      table
        .text("name")
        .unique()
        .notNullable();
    })
    .creatTable("steps", table => {
      table.increments();

      table
        .integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("recipes");
      table.integer("number_of_steps").notNullable();
      table.text("steps").notNullable();
    })
    .createTable("ingredients", table => {
        table.increments();
        table
          .text("name", 128)
          .unique()
        table.float("quantities").notNullable();
    })
    .createTable("ingredient_lists", table => {
        table.increments();
        table
          .integer("recipe_id")
          .notNullable()
          .references("id")
          .inTable("recipes");
        table
          .integer("ingredient_id")
          .notNullable()
          .references("id")
          .inTable("ingredients");
        table.float("quantity").notNullable();
      });
  };

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("ingredient_list");
};
