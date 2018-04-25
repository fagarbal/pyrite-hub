import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'test',

      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true
    }),
  },
];