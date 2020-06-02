import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider, createGlobalStyle } from 'styled-components/macro';
import App from 'App';
import { AuthProvider, OrderProvider } from 'contexts';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <OrderProvider>
            <CssBaseline />
            <GlobalStyle />

            <BrowserRouter>
              <Route component={App} />
            </BrowserRouter>
          </OrderProvider>
        </AuthProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
export default hot(module)(Root);
