import { Component } from '@nestjs/common';
import { Strategy } from 'passport-github';
import * as passport from 'passport';

@Component()
export class GithubStrategy extends Strategy {
	constructor() {
		super({
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: process.env.GITHUB_CALLBACK_URL
		},
			async (accessToken, refreshToken, profile, done) => await this.verify(accessToken, refreshToken, profile, done)
		);

		passport.use(this);
	}

    public async verify(accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
}
