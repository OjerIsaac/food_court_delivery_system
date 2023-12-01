import { DATA_SOURCE } from './database.constant';
import selectedConfig from './datasource';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      return selectedConfig.initialize();
    },
  },
];
