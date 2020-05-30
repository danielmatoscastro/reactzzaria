import React, {
  lazy, Suspense, useEffect, useContext,
} from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import firebase from 'services/firebase';
import { AuthContext } from 'contexts/Auth';

const MainPage = lazy(() => import('pages/MainPage'));
const Login = lazy(() => import('pages/Login'));

function App() {
  const { setUserInfo } = useContext(AuthContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userData) => {
      setUserInfo({ user: userData, isUserLoggedIn: !!userData });
    });
  }, [setUserInfo]);

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
