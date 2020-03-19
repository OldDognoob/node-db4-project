
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          name: "low fat yogurt, cucumber with pearl grated,clove garlic, pressed,tablespoons fresh lemon juice,tablespoons extra-virgin olive oil,teaspoons grated lemon zest,tablespoons chopped fresh dill,tablespoon salt,tablespoon freshly ground black pepper", 
          quantities: "1,1/1,1,2,2,2,3,1,1"
        },
        {
          name: " teaspoons NESCAFÉ® Clássico,teaspoons sugar,tablespoon cold water,ice,Evaporated Milk (optional)",
          quantities: "2,2,1"
        },
        {
          name: "sheets of phyllo pastry, feta cheese, crumbled (7 ounces), a cup milk cream,grated Parmesan or Regato or kefalograviera, grated Gouda cheese or Emedal cheese,ricotta cheese or anthotiro,large organic eggs, beaten,olive oil or melted butter,freshly ground pepper ",
          quantities: "8-10,200gr,3/4,100gr,100gr,100gr,2,2"
        }
      ]);
    });
};
