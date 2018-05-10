import { Injectable, NestMiddleware } from '@nestjs/common';
import * as passport from 'passport';

@Injectable()
export class GithubMiddleware implements NestMiddleware {
	resolve(): any {
		return passport.authenticate('github', { failureRedirect: '/?logged=error' });
	}
}
