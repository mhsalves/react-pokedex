import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalCSS from '../components/GlobalCSS';

import theme from '../theme';

function MyPokedexApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyPokedexApp;