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
            { path: '/auth/gitlab', method: RequestMethod.GET },
            { path: '/auth/gitlab/callback', method: RequestMethod.GET }
        );
    }
}
