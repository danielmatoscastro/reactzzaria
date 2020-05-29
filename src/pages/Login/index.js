import React, { PureComponent, Fragment } from 'react';
import { Grid, Button } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Container, MainLogo, GitHubButton } from './style';

const firebaseConfig = {
  apiKey: 'AIzaSyBzGc7us8I0XjmxT-j0JOYtm-f5qtIXM3U',
  authDomain: 'reactzzaria-25738.firebaseapp.com',
  databaseURL: 'https://reactzzaria-25738.firebaseio.com',
  projectId: 'reactzzaria-25738',
  storageBucket: 'reactzzaria-25738.appspot.com',
  messagingSenderId: '398846638007',
  appId: '1:398846638007:web:e0acec29ab78cbcb471a32',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Login extends PureComponent {
  state = {
    isUserLoggedIn: false,
    user: null,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user, isUserLoggedIn: !!user });
    });
  }

  login = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      this.setState({ user: null, isUserLoggedIn: false });
    });
  }

  render() {
    const { isUserLoggedIn, user } = this.state;

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
                <Button variant="contained" onClick={this.logout}>Sair</Button>
              </Fragment>
            )}

            {!isUserLoggedIn && (
            <GitHubButton onClick={this.login}>
              Entrar com GitHub
            </GitHubButton>
            )}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Login;
