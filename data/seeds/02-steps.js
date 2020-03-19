exports.seed = function(knex) {
  return knex("steps")
    .del()
    .then(function() {
      return knex("steps").insert([
        {
          recipe_id: 1,
          number_of_steps: 1,
          instruction: "Stir together yogurt,grated cucumber,garlic and olive oil in a bowl"
        },
        {
          recipe_id: 1,
          number_of_steps: 2,
          instruction: "Add lemon zest, dill, salt and pepper"
        },
        {
          recipe_id: 1,
          number_of_steps: 3,
          instruction: "Whisk until smooth"
        },
        {
          recipe_id: 1,
          number_of_steps: 4,
          instruction: "Pour into a serving dish,cover tightly & refrigerate 8 hours before serving"
        },
        {
          recipe_id: 2,
          number_of_steps: 1,
          instruction: "In a cocktail shaker or jar with a tight-fitting lid, combine instant coffee, sugar and water"
        },
        {
          recipe_id: 2,
          number_of_steps: 2,
          instruction: "Shake vigorously for 30 seconds, until very foamy"
        },
        {
          recipe_id: 2,
          number_of_steps: 3,
          instruction: "Pout into a glass filled with ice and slowly top of with milk(or cold water)"
        },
        {
          recipe_id: 2,
          number_of_steps: 3,
          instruction: "Server immediately!"
        },
        {
          recipe_id: 3,
          number_of_steps: 1,
          instruction: "Thaw completely the phyllo dough by putting it in the fridge from the previous day"
        },
        {
          recipe_id: 3,
          number_of_steps: 2,
          instruction: " Use a fork to crumble the feta cheese into a large bowl and add the beaten eggs along with the rest of the grated cheese and milk cream. Chop some fresh mint and add to the mixture. Season with freshly ground pepper and blend well with a spoon. Place the mixture in the refrigerator for 20-30 minutes."
        },
        {
          recipe_id: 3,
          number_of_steps: 3,
          instruction: "Using a pastry brush, butter the bottom and sides of the tray. Place one sheet of phyllo at the bottom of the pan and with a cooking brush sprinkle some olive oil or melted butter. Repeat the procedure, adding 4-5 more sheets of phyllo dough. You will use 5-6 phyllo sheets for the bottom."
        },
        {
          recipe_id: 3,
          number_of_steps: 4,
          instruction: "Pour in the feta cheese mixture and smooth with a spatula. With a knife trim some of the excessive phyllo, and fold the excess phyllo sheets flaps over the mixture.Top with 4-5 more phyllo sheets, making sure to oil or butter each one, before adding the other; roll in the edges. Brush the top with oil or butter, sprinkle with water and sesame seeds. If using commercial phyllo dough to make this tiropita recipe make sure to scar the top with a sharp knife, to help release the steam. "
        },
        {
          recipe_id: 3,
          number_of_steps: 5,
          instruction: "Bake  the pie in a preheated oven at 180C for 45-50 minutes, until the phyllo is crisp and golden. Let it cool down for a while before serving. Enjoy!"
        }
      ]);
    });
};