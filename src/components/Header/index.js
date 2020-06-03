import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppBar } from '@material-ui/core';
import CommonHeader from 'components/CommonHeader';
import CheckoutHeader from 'components/CheckoutHeader';
import { CHECKOUT } from 'routes';
import { Toolbar } from './style';

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Switch>
          <Route path={CHECKOUT} component={CheckoutHeader} />
          <Route component={CommonHeader} />
        </Switch>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
