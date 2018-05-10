import { Module } from '@nestjs/common';
import { ComponentsController } from './components.controller';
import { ComponentsFile } from './components.component';
import { ComponentService } from './components.service';
import { ComponentResolver } from './components.resolver';
import { Component } from './components.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
	modules: [TypegooseModule.forFeature(Component)],
	controllers: [ComponentsController],
	providers: [ComponentService, ComponentsFile, ComponentResolver]
})
export class ComponentsModule { }
