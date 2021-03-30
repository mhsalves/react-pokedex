import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class extends Document {
  static async getInitialProps(ctx) {
    const { renderPage } = ctx;
    const sheet = new ServerStyleSheet();
    const page = renderPage({ enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)});
    const styleTags = sheet.getStyleElement();
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...page, styleTags };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {this.props.styleTags}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}