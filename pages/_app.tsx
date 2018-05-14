import React from 'react';
import App, { Container } from 'next/app';
import apolloClient from "../public/lib/initApollo";
import { ApolloProvider } from 'react-apollo';

export default class MyApp extends App { 
    props: any;
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <ApolloProvider client={apolloClient()}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        );
    }
}
