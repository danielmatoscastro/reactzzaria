import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import MainPage from 'pages/MainPage';
import Login from 'pages/Login';


const App = () => (
  <Fragment>
    <CssBaseline />

    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
