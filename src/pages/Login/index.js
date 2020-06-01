import React from 'react';
import { Grid } from '@material-ui/core';
import { useAuth } from 'hooks';
import { MainLogo } from 'components';
import { Container, GitHubButton } from './style';

function Login() {
  const { login } = useAuth();

  return (
    <Container>
      <Grid container justify="center" spacing={5}>
        <Grid item>
          <MainLogo />
        </Grid>

        <Grid item xs={12} container justify="center">
          <GitHubButton onClick={login}>
            Entrar com GitHub
          </GitHubButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
