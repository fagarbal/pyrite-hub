import { Module } from '@nestjs/common';
import { ComponentsModule } from "./component/components.module";
import { AppController } from './app.controller';

@Module({
	imports: [ComponentsModule],
	controllers: [AppController],
	components: [],
})
export class AppModule { }
