import { Module } from '@nestjs/common';
import { ComponentService } from './component.service';
import { ComponentResolver } from './component.resolver';
import { Component } from './component.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	modules: [TypeOrmModule.forFeature([Component])],
	providers: [ComponentService, ComponentResolver]
})
export class ComponentsModule {}
