import * as path from 'path';
import Knex from 'knex';
import { env } from './database.env';

const knexConfig = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: '',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/../../**/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/../**/seeds'),
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/../../**/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/../**/seeds'),
    },
  },
};

const environment = process.env.NODE_ENV || 'development';
const selectedConfig = knexConfig[environment];

const knex = Knex(selectedConfig);

export { knex };
