import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ExpressSessionMiddleware } from './session.middleware';
import { ExpressCompressionMiddleware } from './compression.middleware';
import { ExpressPassportMiddleware } from './passport.middleware';

@Module({})
export class MiddlewareModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply([ExpressCompressionMiddleware, ExpressSessionMiddleware, ExpressPassportMiddleware])
            .forRoutes('/');
    }
}
