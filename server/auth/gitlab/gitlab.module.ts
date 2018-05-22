import { Module, MiddlewareConsumer } from '@nestjs/common';
import { GitlabController } from './gitlab.controller';
import { GitlabStrategy } from './gitlab.component';
import { GitlabMiddleware } from './gitlab.middleware';

@Module({
	controllers: [GitlabController],
	providers: [GitlabStrategy],
})
export class GitlabModule {
	configure(consumer: MiddlewareConsumer): void {
		consumer
			.apply(GitlabMiddleware)
			.forRoutes('/auth/gitlab/');
	}
}
