import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: process.env.GRAPHQL_URL || (location.href + 'graphql'), fetch, headers: { compression: "no"}});

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
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
