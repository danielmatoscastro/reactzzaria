import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components/macro';
import App from 'App';
import AuthProvider from 'contexts/Auth';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />

          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
export default hot(module)(Root);
