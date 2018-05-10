import { Injectable, NestMiddleware } from '@nestjs/common';
import * as passport from 'passport';

@Injectable()
export class BitbucketMiddleware implements NestMiddleware {
	resolve(): any {
		return passport.authenticate('bitbucket', { failureRedirect: '/?logged=error' });
	}
}
