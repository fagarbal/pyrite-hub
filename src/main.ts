import * as dotenv from 'dotenv';
import * as exphbs  from 'express-handlebars';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initPassport } from './passport.init';

dotenv.load();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	initPassport(app);

	app.engine('handlebars', exphbs({
		defaultLayout: __dirname + '/templates/default'
	}));

	app.set('views', __dirname + '/templates');
	app.set('view engine', 'handlebars');

	await app.listen(8080);
}

bootstrap();
