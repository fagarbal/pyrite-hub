import { Injectable } from '@nestjs/common';
import { User } from './auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	signin(username, password) {
		return this.userRepository.findOne({
            username, password
        })
        .then((user) => {
            if (!user) throw 'error';

            return {
                token: 'login'
            }
        });
	}
}
