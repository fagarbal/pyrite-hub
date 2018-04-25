import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as passport from 'passport';

@Middleware()
export class GitlabMiddleware implements NestMiddleware {
  resolve(...args: any[]): ExpressMiddleware {
    return passport.authenticate('gitlab', { failureRedirect: '/gitlab' });
  }
}