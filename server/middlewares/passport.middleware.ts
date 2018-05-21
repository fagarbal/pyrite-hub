import * as passport from 'passport';
import { NestMiddleware, Injectable } from '@nestjs/common';
import { RequestHandler } from 'express';

@Injectable()
export class ExpressPassportMiddleware implements NestMiddleware {
    public resolve(): RequestHandler {
        passport.serializeUser(this.serializeUser);
    
        passport.deserializeUser(this.deserializeUser);

        return passport.initialize();
    }

    serializeUser(user, done) {
        done(null, user);
    }

    deserializeUser(user, done) {
        done(null, user);
    }
}
