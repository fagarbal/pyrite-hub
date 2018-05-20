import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

@Module({
	imports: [GraphQLModule],
})
export class GraphqlModule implements NestModule {
	constructor(private readonly graphQLFactory: GraphQLFactory) {}

	configure(consumer: MiddlewareConsumer) {
		const typeDefs = this.graphQLFactory.mergeTypesByPaths(
			'./**/*.graphql',
		);

		const schema = this.graphQLFactory.createSchema({ typeDefs });

		if (process.env.NODE_ENV !== 'production') {
			consumer
				.apply(graphiqlExpress({ endpointURL: '/graphql' }))
				.forRoutes('/graphiql');
		}

		consumer
			.apply(
				graphqlExpress((req: any) => ({
					schema,
					context: { session: req.session },
				})),
			)
			.forRoutes('/graphql');
	}
}
