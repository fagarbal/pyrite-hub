import { Injectable } from '@nestjs/common';
import * as passport from 'passport';
import { Strategy } from 'passport-bitbucket-oauth2';

@Injectable()
export class BitbucketStrategy extends Strategy {
	constructor() {
		super(
			{
				clientID: process.env.BITBUCKET_CLIENT_ID,
				clientSecret: process.env.BITBUCKET_CLIENT_SECRET,
				callbackURL: process.env.API_URL + '/auth/bitbucket/callback',
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
