import * as dotenv from 'dotenv';
import * as session from 'express-session';
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initPassport } from './passport.init';
import * as compression from 'compression';
import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';

const options = {
    cert: fs.readFileSync('./certs/fullchain1.pem', 'utf8'),
    key: fs.readFileSync('./certs/privkey1.pem', 'utf8')
};

async function bootstrap() {
	dotenv.load();	
	const expressApp = express();
	const httpsServer = https.createServer(options, expressApp);
	const httpServer = http.createServer(expressApp);

	const app = await NestFactory.create(AppModule, expressApp);
	app.use(compression());

	app.use(session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true
	}));

	initPassport(app);
	await app.init();

	httpServer.listen(process.env.PORT);
	httpsServer.listen(process.env.SSL_PORT);
}

bootstrap();
