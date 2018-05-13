import * as compression from 'compression';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initPassport } from './passport.init';

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

	initPassport(app);

	await app.listen(process.env.PORT || 8080);
}

bootstrap();
