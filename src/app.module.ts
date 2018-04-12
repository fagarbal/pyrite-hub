import { Module } from '@nestjs/common';
import { ComponentsModule } from "./component/components.module";
import { GithubModule } from "./github/github.module";
import { AppController } from './app.controller';

@Module({
	imports: [ComponentsModule, GithubModule],
	controllers: [AppController],
	components: [],
})
export class AppModule { }
