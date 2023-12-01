import { DATA_SOURCE } from './database.constant';
import { knex } from './datasource';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      return knex.initialize();
    },
  },
];
