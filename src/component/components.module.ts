import { Module } from '@nestjs/common';
import { ComponentsController } from './components.controller';
import { ComponentsService } from './components.component';

@Module({
	imports: [],
	controllers: [ComponentsController],
	components: [ComponentsService],
})
export class ComponentsModule { }
