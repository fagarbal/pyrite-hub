import { Module } from '@nestjs/common';
import { ComponentsModule } from './component/components.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
	imports: [AuthModule, ComponentsModule, DatabaseModule],
	controllers: [AppController],
	components: [],
})
export class AppModule { }
