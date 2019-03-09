
exports.seed = function(knex, Promise) {
  return knex('games').del()
    .then(function () {
      return knex('games').insert([
        { 
          title: 'Pacman',
          genre: 'Arcade',
          releaseYear: 1980
        }
      ]);
    });
};
