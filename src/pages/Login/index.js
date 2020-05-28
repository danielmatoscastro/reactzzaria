import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { ReactComponent as Logo } from './logoReactzzaria.svg';

const Login = () => (
  <Fragment>
    <Logo />
    <Button>Entrar com GitHub</Button>
  </Fragment>
);

export default Login;
