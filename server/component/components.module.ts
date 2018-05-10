import { Module } from '@nestjs/common';
import { ComponentsController } from './components.controller';
import { ComponentsService } from './components.component';
import { ComponentResolver } from './components.resolver';

@Module({
	controllers: [ComponentsController],
	providers: [ComponentsService, ComponentResolver],
})
export class ComponentsModule { }
