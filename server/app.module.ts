import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ComponentsModule } from './component/components.module';
import { AuthModule } from './auth/auth.module';
import { RenderModule } from './render/render.module';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

@Module({
	imports: [GraphQLModule, AuthModule, ComponentsModule, RenderModule]
})
export class AppModule implements NestModule {
	constructor(private readonly graphQLFactory: GraphQLFactory) { }

	configure(consumer: MiddlewareConsumer) {
		const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
		const schema = this.graphQLFactory.createSchema({ typeDefs });

		consumer
			.apply(graphiqlExpress({ endpointURL: '/graphql' }))
			.forRoutes('/graphiql')
			.apply(graphqlExpress(req => ({ schema, rootValue: req })))
			.forRoutes('/graphql');
	}
}