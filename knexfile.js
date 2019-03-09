const localPgConnection = {
  host: 'localhost',
  database: 'games',
  user: 'leland',
  password: 'leland',
};
const prodDbConnection = process.env.DATABASE_URL || localPgConnection;
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/games.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: prodDbConnection, // an object or a string
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
