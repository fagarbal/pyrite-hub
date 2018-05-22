import { Module, MiddlewareConsumer } from '@nestjs/common';
import { GithubController } from './github.controller';
import { GithubStrategy } from './github.component';
import { GithubMiddleware } from './github.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../auth.entity';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	controllers: [GithubController],
	providers: [GithubStrategy],
})
export class GithubModule {
	configure(consumer: MiddlewareConsumer): void {
		consumer.apply(GithubMiddleware).forRoutes('/auth/github/');
	}
}
