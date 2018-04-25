import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { BitbucketController } from './bitbucket.controller';
import { BitbucketStrategy } from './bitbucket.component';
import { BitbucketMiddleware } from './bitbucket.middleware';

@Module({
	controllers: [BitbucketController],
	components: [BitbucketStrategy],
})
export class BitbucketModule {
	configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(BitbucketMiddleware).forRoutes(
            { path: '/auth/bitbucket', method: RequestMethod.GET },
            { path: '/auth/bitbucket/callback', method: RequestMethod.GET }
        );
    }
}