import * as dotenv from 'dotenv';
import * as exphbs  from 'express-handlebars';
import * as express from 'express';
import * as session from 'express-session';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initPassport } from './passport.init';

dotenv.load();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(session({ secret: 'keyboard cat' }));

	initPassport(app);

	app.engine('handlebars', exphbs({
		defaultLayout: __dirname + '/templates/default'
	}));

	app.set('views', __dirname + '/templates');
	app.set('view engine', 'handlebars');

	app.use('/static', express.static(__dirname + '/static'));

	await app.listen(8080);
}

bootstrap();
