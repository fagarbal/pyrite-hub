import { RenderController } from './render.controller';
import { RenderService } from './render.component';
import { RenderMiddleware } from './render.middleware';
import { Module, MiddlewareConsumer } from '@nestjs/common';

@Module({
	controllers: [RenderController],
	providers: [RenderService]
})
export class RenderModule {
	configure(consumer: MiddlewareConsumer): void {
        consumer.apply(RenderMiddleware).forRoutes('/_next', '/static');
	}
	
}
