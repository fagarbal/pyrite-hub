import * as expressSession from 'express-session';
import { v4 as uuid } from 'uuid';
import { NestMiddleware, Injectable } from '@nestjs/common';
import { RequestHandler } from 'express';
import * as connectMongo from 'connect-mongo';

const MongoStore = connectMongo(expressSession);

@Injectable()
export class ExpressSessionMiddleware implements NestMiddleware {
    public resolve(): RequestHandler {
        return expressSession({
            genid: () => uuid(),
            secret: process.env.SESSION_TOKEN,
            resave: false,
            saveUninitialized: true,
            store: new MongoStore({
                url: process.env.MONGODB_URI,
                mongoOptions: {
                    authSource: process.env.MONGODB_AUTH_SOURCE
                }
            })
        });
    }
}