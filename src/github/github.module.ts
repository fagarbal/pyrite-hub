import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { GithubController } from './github.controller';
import { GithubService } from './github.component';
import { GithubMiddleware } from './github.middleware';

@Module({
	imports: [],
	controllers: [GithubController],
	components: [GithubService],
})
export class GithubModule {
	configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(GithubMiddleware).forRoutes(
            { path: '/github', method: RequestMethod.GET },
            { path: '/github/callback', method: RequestMethod.GET }
        );
    }
}