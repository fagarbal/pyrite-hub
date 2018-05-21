import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation()
	signin(_, { username, password }, { session }) {
		return this.authService
			.signin(username, password)
			.then(user => {
				session.user = user.username;

				return true;
			});
	}

	@Mutation()
	logout(_, {}, { session }) {
		session.destroy();

		return true;
	}

}
