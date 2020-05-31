import React, { lazy, Fragment, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import Header from './components/Header';
import { Main } from './style';

const ChoosePizzaSize = lazy(() => import('./ChoosePizzaSize'));
const ChoosePizzaFlavours = lazy(() => import('./ChoosePizzaFlavours'));

function MainPage() {
  return (
    <Fragment>
      <Header />

      <Main>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path="/" exact component={ChoosePizzaSize} />
            <Route path="/choose-pizza-flavours" component={ChoosePizzaFlavours} />
          </Switch>
        </Suspense>
      </Main>
    </Fragment>
  );
}
export default MainPage;
