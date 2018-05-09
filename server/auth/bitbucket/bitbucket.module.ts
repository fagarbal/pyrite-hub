import { Module, MiddlewareConsumer } from '@nestjs/common';
import { BitbucketController } from './bitbucket.controller';
import { BitbucketStrategy } from './bitbucket.component';
import { BitbucketMiddleware } from './bitbucket.middleware';

@Module({
	controllers: [BitbucketController],
	providers: [BitbucketStrategy]
})
export class BitbucketModule {
	configure(consumer: MiddlewareConsumer): void {
        consumer.apply(BitbucketMiddleware).forRoutes('/auth/bitbucket', '/auth/bitbucket/callback');
    }
}
