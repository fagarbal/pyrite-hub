import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
import { GitlabModule } from './gitlab/gitlab.module';
import { BitbucketModule } from './bitbucket/bitbucket.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth.entity';

@Module({
	imports: [GithubModule, GitlabModule, BitbucketModule, TypeOrmModule.forFeature([User])],
	providers: [AuthResolver, AuthService],
})
export class AuthModule {}
