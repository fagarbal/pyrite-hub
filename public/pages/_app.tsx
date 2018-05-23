import React from 'react';
import App, { Container } from 'next/app';
import {apolloClient} from "../utils/apollo";
import { ApolloProvider } from 'react-apollo';
import '../styles/build.style.scss'; 

export default class MyApp extends App { 
    static async getInitialProps({ Component, _, ctx }) {
        let pageProps: any = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx) || {};
        }

        if (ctx.req.session.passport) pageProps.user = ctx.req.session.passport.user.username;

        return { pageProps };
    }

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
