import * as compression from 'compression';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initPassport } from './passport.init';

import * as session from 'express-session';
import * as uuid from 'uuid/v4';

export async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(
		compression({
			filter(req, res) {
				if (req.headers.compression) return false;
				return compression.filter(req, res);
			},
		}),
	);

	app.use(session({
		genid: () =>  uuid(),
		secret: process.env.SESSION_TOKEN,
		resave: false,
		saveUninitialized: true
	}))

	initPassport(app);

	await app.listen(process.env.PORT || 8080);
}

bootstrap();
