import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

if (!(<any>process).browser) {
	(<any>global).fetch = fetch;
}

function create() {
	return new ApolloClient({
		connectToDevTools: (<any>process).browser,
		ssrMode: !(<any>process).browser,
		link: new HttpLink({
			uri: process.env.API_URL + process.env.GRAPHQL_URL,
			fetch,
			headers: { compression: 'no' },
			credentials: 'same-origin',
		}),
		cache: new InMemoryCache(),
	});
}

function initApollo() {
	if (!(<any>process).browser) {
		return create();
	}

	if (!apolloClient) {
		apolloClient = create();
	}

	return apolloClient;
}

apolloClient = initApollo();

export { apolloClient };
