import React from 'react';
import { Grid } from '@material-ui/core';
import { Container, MainLogo, GitHubButton } from './style';

const Login = () => (
  <Container>
    <Grid container justify="center" spacing={10}>
      <Grid item>
        <MainLogo />
      </Grid>

      <Grid item xs={12} container justify="center">
        <GitHubButton>Entrar com GitHub</GitHubButton>
      </Grid>
    </Grid>
  </Container>
);

export default Login;
