import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initPassport } from './passport.init';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	initPassport(app);

	await app.listen(8080);
}

bootstrap();
