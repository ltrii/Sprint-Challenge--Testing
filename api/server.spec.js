const request = require('supertest');

const server = require('./server.js');

describe('GET /', () => {
    it('should return 200 OK', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('200 OK', async () => {
      const res = await request(server).get('/');

      expect(res.status).toBe(200);
    });

    it('JSON', async () => {
      const res = await request(server).get('/');

      expect(res.type).toBe('application/json');
    });

    it('should return { api: "Running..." }', async () => {
      const res = await request(server).get('/');

      expect(res.body).toEqual({ api: 'Running...' });
    });
});

describe('POST /games', () => {
    it("should return 201", async () => {
        const game = {
            title: 'Awesome Game',
            genre: 'Shooty Bang Adventure with Roles',
            releaseYear: 3008
        };
        const response = await request(server)
          .post("/games")
          .send(game);
        expect(response.status).toEqual(201);
})
    it("should return game title", async () => {
            const game = {
                title: 'Awesome Game2',
                genre: 'Shooty Bang Adventure with Roles',
                releaseYear: 3008
            };
            const response = await request(server)
            .post("/games")
            .send(game);
        expect(response.body.title).toEqual('Awesome Game2');
})
});