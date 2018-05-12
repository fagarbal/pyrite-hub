import * as session from 'express-session';
// mport * as compression from 'compression';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initPassport } from './passport.init';

declare const module: any;

export async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	
	// TODO: Fail with long graphql responses
	// app.use(compression());

	app.use(session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true 
	}));

	initPassport(app);

	await app.listen(process.env.PORT || 8080);

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}

bootstrap();