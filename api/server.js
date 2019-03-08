const express = require('express');

const games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'Running...' });
});

server.get('/games', async (req, res) => {
  const rows = await games.getAll();

  res.status(200).json(rows);
});

server.post('/games', async (req, res) => {
    const game = req.body;
    if(game.title && game.genre){
        games.insert(game)
            .then(newgame => {
                res.status(201).json(newgame);
            })
            .catch(() => {
                res.status(500).json ({ message: 'game failed to add'})
            })
    } else {
        res.status(422).json({ message: 'Missing game details' })
    }
})

module.exports = server;