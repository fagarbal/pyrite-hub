import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ComponentsModule } from './component/components.module';
import { AuthModule } from './auth/auth.module';
import { RenderModule } from './render/render.module';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
	imports: [
		TypegooseModule.forRoot("mongodb://heroku_4kbs1gn2:2kmu5g4lm5vtfoni4q6d05uun5@ds019638.mlab.com:19638/heroku_4kbs1gn2"),
		GraphQLModule, AuthModule, ComponentsModule, RenderModule
	]
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