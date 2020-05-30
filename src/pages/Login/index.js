import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { AuthContext } from 'contexts/Auth';
import { Container, MainLogo, GitHubButton } from './style';

function Login() {
  const { login } = useContext(AuthContext);

  return (
    <Container>
      <Grid container justify="center" spacing={10}>
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
