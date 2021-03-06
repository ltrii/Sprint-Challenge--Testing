const db = require('../data/dbConfig.js');
const Games = require('./gamesModel');

describe('games model', () => {
  describe('insert()', () => {
    afterEach(async () => {
      await db('games').truncate();
    });

    it('should insert the provided games into the db', async () => {
      await Games.insert({ title: "gModelz", genre: "Testing", releaseYear: 2020 });

      const games = await db('games');
      expect(games).toHaveLength(3);
    });

    it('should insert the provided game into the db', async () => {
      let game = await Games.insert({ title: "gModel", genre: "Testing", releaseYear: 2020 });
      expect(game.title).toBe("gModel");

      game = await Games.insert({ title: "gModel2", genre: "Testing", releaseYear: 2022 });
      expect(game.genre).toBe("Testing");
    });

    it('should pull game by id', async () => {
        let gameID = await Games.findById(1);
        expect(gameID.title).toBe("Pacman");
      });
  });
});