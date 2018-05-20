import { Injectable } from '@nestjs/common';

import { Strategy } from 'passport-gitlab2';
import * as passport from 'passport';

@Injectable()
export class GitlabStrategy extends Strategy {
	constructor() {
		super(
			{
				clientID: process.env.GITLAB_CLIENT_ID,
				clientSecret: process.env.GITLAB_CLIENT_SECRET,
				callbackURL: process.env.API_URL + '/auth/gitlab/callback',
			},
			async (accessToken, refreshToken, profile, done) =>
				await this.verify(accessToken, refreshToken, profile, done),
		);

		passport.use(this as any);
	}

	public async verify(accessToken, refreshToken, profile, done) {
		console.log(accessToken, refreshToken, profile);
		done(null, profile);
	}
}
