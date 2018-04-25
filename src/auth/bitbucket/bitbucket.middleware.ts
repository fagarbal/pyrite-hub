import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as passport from 'passport';

@Middleware()
export class BitbucketMiddleware implements NestMiddleware {
  resolve(...args: any[]): ExpressMiddleware {
    return passport.authenticate('bitbucket', { failureRedirect: '/bitbucket' });
  }
}