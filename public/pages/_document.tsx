import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await (Document as any).getInitialProps(ctx)
        return {...initialProps};
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <title>PyriteHub</title>
                    <meta name="description" content="From your git repository to internet with some clicks"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"></link>
                    <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css"/>
                    <link rel="stylesheet" href="/_next/static/style.css"></link>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                    <link rel="shortcut icon" type="image/png" href="/static/images/logo.png"/>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}