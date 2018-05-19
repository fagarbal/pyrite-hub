import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation()
	signin(_, { username, password }) {
		return this.authService.signin(username, password)
	}
}
