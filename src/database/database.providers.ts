import { createConnection } from 'typeorm';
import { DB_CONECTION } from '../constants';

export const databaseProviders = [
	{
		provide: DB_CONECTION,
		useFactory: async () => await createConnection({
			type: 'mariadb',
			host: process.env.DB_HOST,
			port: parseInt(process.env.DB_PORT),
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			entities: [
				__dirname + '/../**/*.entity{.ts,.js}',
			],
			synchronize: true
		}),
	},
];
