import { Module } from '@nestjs/common';
import { ComponentsModule } from './component/components.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
	imports: [AuthModule, ComponentsModule],
	controllers: [AppController],
	components: [],
})
export class AppModule { }
