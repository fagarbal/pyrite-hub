import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { GitlabController } from './gitlab.controller';
import { GitlabStrategy } from './gitlab.component';
import { GitlabMiddleware } from './gitlab.middleware';

@Module({
	controllers: [GitlabController],
	components: [GitlabStrategy],
})
export class GitlabModule {
	configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(GitlabMiddleware).forRoutes(
            { path: '/gitlab', method: RequestMethod.GET },
            { path: '/gitlab/callback', method: RequestMethod.GET }
        );
    }
}