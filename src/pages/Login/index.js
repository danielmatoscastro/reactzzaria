import React, {
  Fragment, useState, useEffect, useCallback,
} from 'react';
import { Grid, Button } from '@material-ui/core';
import firebase from 'services/firebase';
import { Container, MainLogo, GitHubButton } from './style';

function Login() {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null,
  });
  const { isUserLoggedIn, user } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userData) => {
      setUserInfo({ user: userData, isUserLoggedIn: !!userData });
    });
  }, []);

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      setUserInfo({ user: null, isUserLoggedIn: false });
    });
  }, []);

  return (
    <Container>
      <Grid container justify="center" spacing={10}>
        <Grid item>
          <MainLogo />
        </Grid>

        <Grid item xs={12} container justify="center">
          {isUserLoggedIn && (
            <Fragment>
              <pre>{user.displayName}</pre>
              <Button variant="contained" onClick={logout}>Sair</Button>
            </Fragment>
          )}

          {!isUserLoggedIn && (
            <GitHubButton onClick={login}>
              Entrar com GitHub
            </GitHubButton>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
