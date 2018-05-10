import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: 'http://www.pyritehub.com/graphql', fetch: fetch });

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

export default class MyApp extends App {
    props: any;
    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <ApolloProvider client={client}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        );
    }
}
