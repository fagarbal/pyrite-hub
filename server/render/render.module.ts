import { RenderController } from './render.controller';
import { RenderService } from './render.component';
import { Module } from '@nestjs/common';

@Module({
	controllers: [RenderController],
	providers: [RenderService]
})
export class RenderModule {}
