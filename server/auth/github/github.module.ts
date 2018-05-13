import { Module, MiddlewareConsumer } from '@nestjs/common';
import { GithubController } from './github.controller';
import { GithubStrategy } from './github.component';
import { GithubMiddleware } from './github.middleware';

@Module({
	controllers: [GithubController],
	providers: [GithubStrategy],
})
export class GithubModule {
	configure(consumer: MiddlewareConsumer): void {
		consumer.apply(GithubMiddleware).forRoutes(GithubController);
	}
}
