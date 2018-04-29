import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as passport from 'passport';

@Middleware()
export class GithubMiddleware implements NestMiddleware {
	resolve(...args: any[]): ExpressMiddleware {
		return passport.authenticate('github', { failureRedirect: '/github' });
	}
}