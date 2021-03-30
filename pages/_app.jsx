import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalCSS from '../components/GlobalCSS';

import theme from '../theme';

function MyPokedexApp(props) {
  const { Component, pageProps } = props;

  return (
    <React.StrictMode>
      <GlobalCSS />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyPokedexApp;