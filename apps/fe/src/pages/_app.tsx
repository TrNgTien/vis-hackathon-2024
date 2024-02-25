import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import * as React from 'react';
import '../styles/global.css';
import theme from '../styles/theme';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
