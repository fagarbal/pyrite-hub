import { Module } from '@nestjs/common';
import { ComponentsModule } from "./component/components.module";
import { DatabaseModule } from "./database/database.module";
import { GithubModule } from "./github/github.module";
import { GitlabModule } from "./gitlab/gitlab.module";
import { BitbucketModule } from "./bitbucket/bitbucket.module";
import { LoginModule } from "./login/login.module";
import { AppController } from './app.controller';

@Module({
	imports: [ComponentsModule, GithubModule, GitlabModule, BitbucketModule, DatabaseModule, LoginModule],
	controllers: [AppController],
	components: [],
})
export class AppModule { }
