import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-github';
import * as passport from 'passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, Social } from '../auth.entity';

@Injectable()
export class GithubStrategy extends Strategy {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {
		super(
			{
				clientID: process.env.GITHUB_CLIENT_ID,	
				clientSecret: process.env.GITHUB_CLIENT_SECRET,
				callbackURL: process.env.API_URL + '/auth/github/callback',
			},
			async (accessToken, refreshToken, profile, done) =>
				await this.verify(accessToken, refreshToken, profile, done),
		);

		passport.use(this);
	}

	public async verify(accessToken, _, profile, done) {
		return this.userRepository.findOne({
			social: {
				githubId: profile.id
			}
		}).then((user) => {
			if (user) return done(null, user);
			const newUser = new User();
			newUser.username = profile._json.email;

			const social = new Social();
			
			social.githubId = profile._json.id;
			social.githubToken = accessToken;

			newUser.social = social;

			this.userRepository.save(newUser);

			done(null, newUser);
		});
	}
}
