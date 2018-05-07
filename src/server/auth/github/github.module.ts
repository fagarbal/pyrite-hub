import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { GithubController } from './github.controller';
import { GithubStrategy } from './github.component';
import { GithubMiddleware } from './github.middleware';

@Module({
	controllers: [GithubController],
	components: [GithubStrategy],
})
export class GithubModule {
	configure(consumer: MiddlewaresConsumer): void {
		consumer.apply(GithubMiddleware).forRoutes(
			{ path: '/auth/github', method: RequestMethod.GET },
			{ path: '/auth/github/callback', method: RequestMethod.GET }
		);
	}
}
