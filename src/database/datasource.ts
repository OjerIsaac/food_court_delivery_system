import * as path from 'path';
import { env } from './database.env';

const knexConfig = {
  staging: {
    client: 'sqlite3',
    connection: {
      filename: './',
    },
  },

  development: {
    client: 'pg',
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
    },
    migrations: {
      directory: path.join(__dirname, '/../../src/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/../../src/migrations/seeds'),
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
    },
    migrations: {
      directory: path.join(__dirname, '/../../src/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/../../src/migrations/seeds'),
    },
  },
};

const environment = process.env.NODE_ENV || 'development';
const selectedConfig = knexConfig[environment];

export default selectedConfig;
