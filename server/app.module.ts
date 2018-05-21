import { Module } from '@nestjs/common';
import { ComponentsModule } from './component/component.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { FileModule } from './file/file.module';
import { DatabaseModule } from './database/database.module';
import { GraphqlModule } from './graphql/graphql.module';
import { MiddlewareModule } from './middlewares/middlewares.module';

@Module({
	imports: [
		MiddlewareModule,
		DatabaseModule,
		GraphqlModule,
		AuthModule,
		ComponentsModule,
		FileModule,
		PagesModule,
	],
})
export class AppModule {}
