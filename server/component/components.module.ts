import { Module } from '@nestjs/common';
import { ComponentsController } from './components.controller';
import { ComponentsService } from './components.component';

@Module({
	controllers: [ComponentsController],
	providers: [ComponentsService],
})
export class ComponentsModule { }
