import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
        render() {
                return (
                        <Html lang="en" dir="ltr">
                                <Head>
                                        <title>Translator Extension</title>
                                        <meta name="description" content="Translate English to Farsi instantly." />
                                        <meta charSet="utf-8" />
                                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                                        <link rel="icon" href="/favicon.ico" />
                                </Head>
                                <body>
                                        <Main />
                                        <NextScript />
                                </body>
                        </Html>
                );
        }
}

export default MyDocument;