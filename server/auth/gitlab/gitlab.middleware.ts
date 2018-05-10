import { Injectable, NestMiddleware } from '@nestjs/common';
import * as passport from 'passport';

@Injectable()
export class GitlabMiddleware implements NestMiddleware {
	resolve() {
		return passport.authenticate('gitlab', { failureRedirect: '/?logged=error' });
	}
}
