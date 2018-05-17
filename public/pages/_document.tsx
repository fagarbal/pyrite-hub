import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await (Document as any).getInitialProps(ctx)
        return {...initialProps};
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <title>Pyrite Hub - Web Components Cloud</title>
                    <meta name="description" content="From your repository to internet with a few clicks"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <link rel="stylesheet" href="/_next/static/style.css"/>
                    <link rel="shortcut icon" type="image/png" href="/static/images/logo.png"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}