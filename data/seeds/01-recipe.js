
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Greek tzatziki" },
        { name: "Greek Frappe" },
        { name: "Greek Cheese Pie" }
      ]);
    });
};