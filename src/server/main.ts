import * as dotenv from 'dotenv';
import * as session from 'express-session';
import * as next from 'next';
import * as express from 'express';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initPassport } from './passport.init';

const nextApp = next(require('../../next.config.js'));

export { nextApp };

const handle = nextApp.getRequestHandler()

async function bootstrap() {
	dotenv.load();

	await nextApp.prepare();

	const server = express();

	const app = await NestFactory.create(AppModule, server as any);

	//app.setGlobalPrefix('api');

	app.use(session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true
	}));

	initPassport(app);
	app.use('/static', express.static('/home/fabio/workspaces/pyrite-hub/src/client'));

	await app.init();

	server.get('*', handle);
	server.get('/_next/*', handle); 
	server.get('/_next/-/*', handle); 

	await app.listen(8080);
}

bootstrap();
