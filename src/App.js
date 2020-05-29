import React, { lazy, Suspense, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, LinearProgress } from '@material-ui/core';

const MainPage = lazy(() => import('pages/MainPage'));
const Login = lazy(() => import('pages/Login'));

const App = () => (
  <Fragment>
    <CssBaseline />

    <BrowserRouter>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </Fragment>
);

export default App;
