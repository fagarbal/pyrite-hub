import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
import { GitlabModule } from './gitlab/gitlab.module';
import { BitbucketModule } from './bitbucket/bitbucket.module';

@Module({
	imports: [GithubModule, GitlabModule, BitbucketModule],
})
export class AuthModule { }
