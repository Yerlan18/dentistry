import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css" />
                    {/*<script src="https:code.jquery.com/jquery-3.4.1min.js" />*/}
                </Head>
                <body>
                <Main />
                <NextScript>
                </NextScript>
                </body>
            </Html>
        )
    }
}
