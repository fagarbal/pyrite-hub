import * as expressSession from 'express-session';
import { v4 as uuid } from 'uuid';
import { NestMiddleware, Injectable } from '@nestjs/common';
import { RequestHandler } from 'express';

@Injectable()
export class ExpressSessionMiddleware implements NestMiddleware {
    public resolve(): RequestHandler {
        return expressSession({
            genid: () => uuid(),
            secret: process.env.SESSION_TOKEN,
            resave: false,
            saveUninitialized: true,
        });
    }
}