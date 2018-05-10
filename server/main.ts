import * as dotenv from 'dotenv';
import * as session from 'express-session';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initPassport } from './passport.init';
import * as compression from 'compression';


async function bootstrap() {
	dotenv.load();	

	const app = await NestFactory.create(AppModule);
	app.use(compression());

	app.use(session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true
	}));

	initPassport(app);

	await app.listen(process.env.PORT || 8080);
}

bootstrap();
