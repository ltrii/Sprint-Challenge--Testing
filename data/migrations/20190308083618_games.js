
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', tbl => {
      tbl.increments();

      tbl.string("title").unique().notNullable();
      tbl.string("genre").notNullable();
      tbl.integer("releaseYear").notNull().defaultTo(1980);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
