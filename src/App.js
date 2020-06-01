import React, {
  lazy, Suspense, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import firebase from 'services/firebase';
import { HOME, LOGIN } from 'routes';
import { useAuth } from 'hooks';

const MainPage = lazy(() => import('pages/MainPage'));
const Login = lazy(() => import('pages/Login'));

function App({ location }) {
  const [didCheckLogin, setDidCheckLogin] = useState(false);
  const { userInfo, setUserInfo } = useAuth();
  const { isUserLoggedIn } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userData) => {
      setUserInfo({
        user: {
          ...userData,
          firstName: userData?.displayName.split(' ')[0] ?? 'Cliente',
        },
        isUserLoggedIn: !!userData,
      });
      setDidCheckLogin(true);
    });
  }, [setUserInfo, setDidCheckLogin]);

  if (!didCheckLogin) {
    return <LinearProgress />;
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />;
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />;
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route path={HOME} component={MainPage} />
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
