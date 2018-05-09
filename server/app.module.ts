import { Module } from '@nestjs/common';
import { ComponentsModule } from './component/components.module';
import { AuthModule } from './auth/auth.module';
import { RenderModule } from './render/render.module';

@Module({
	imports: [AuthModule, ComponentsModule, RenderModule]
})
export class AppModule { }
