import { RenderController } from './render.controller';
import { Module } from '@nestjs/common';

@Module({
	controllers: [RenderController],
	components: [],
})
export class RenderModule { }
