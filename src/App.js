import React, {
  lazy, Suspense, useState, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import firebase from 'services/firebase';
import { AuthContext } from 'contexts/Auth';

const MainPage = lazy(() => import('pages/MainPage'));
const Login = lazy(() => import('pages/Login'));

function App({ location }) {
  const [didCheckLogin, setDidCheckLogin] = useState(false);
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const { isUserLoggedIn } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userData) => {
      setUserInfo({ user: userData, isUserLoggedIn: !!userData });
      setDidCheckLogin(true);
    });
  }, [setUserInfo, setDidCheckLogin]);

  if (!didCheckLogin) {
    return <LinearProgress />;
  }

  if (isUserLoggedIn && location.pathname === '/login') {
    return <Redirect to="/" />;
  }

  if (!isUserLoggedIn && location.pathname !== '/login') {
    return <Redirect to="/login" />;
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Suspense>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
