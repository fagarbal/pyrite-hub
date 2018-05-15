import React from 'react';
import App, { Container } from 'next/app';
import {apolloClient} from "../public/utils/apollo";
import { ApolloProvider } from 'react-apollo';
import '../public/styles/build.style.scss'; 

export default class MyApp extends App { 
    props: any;
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <ApolloProvider client={apolloClient}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        );
    }
}
