import * as dotenv from 'dotenv';
import * as session from 'express-session';

import * as next from 'next';
import * as express from 'express';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initPassport } from './passport.init';

const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({
    dev
});

export { nextApp };

async function bootstrap() {
	dotenv.load();

	await nextApp.prepare();

	const server = express();

	const app = await NestFactory.create(AppModule, server as any);

	app.use(session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true
	}));

	initPassport(app);

	await app.listen(process.env.PORT || 8080);
}

bootstrap();
