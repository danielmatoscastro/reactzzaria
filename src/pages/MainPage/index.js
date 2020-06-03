import React, { lazy, Fragment, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import {
  HOME, CHOOSE_PIZZA_FLAVOURS, CHOOSE_PIZZA_QUANTITY, CHECKOUT,
} from 'routes';
import { Header } from 'components';

const ChoosePizzaSize = lazy(() => import('./ChoosePizzaSize'));
const ChoosePizzaFlavours = lazy(() => import('./ChoosePizzaFlavours'));
const ChoosePizzaQuantity = lazy(() => import('./ChoosePizzaQuantity'));
const Checkout = lazy(() => import('./Checkout'));

function MainPage() {
  return (
    <Fragment>
      <Header />

      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path={HOME} exact component={ChoosePizzaSize} />
          <Route path={CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
          <Route path={CHOOSE_PIZZA_QUANTITY} component={ChoosePizzaQuantity} />
          <Route path={CHECKOUT} component={Checkout} />
        </Switch>
      </Suspense>
    </Fragment>
  );
}
export default MainPage;
