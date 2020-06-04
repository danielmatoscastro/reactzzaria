import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import {
  Content,
  OrderInfo,
  CheckoutFooter,
  FormAddress,
  PhoneField,
} from 'components';
import { HOME, CHECKOUT_CONFIRMATION } from 'routes';
import { useOrder } from 'hooks';
import { Paper, Title } from './style';

function Checkout() {
  const { order, addAddress, addPhone } = useOrder();

  if (!order.pizzas.length) {
    return <Redirect to={HOME} />;
  }

  return (
    <Fragment>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>Qual o endereço para entrega?</Title>
            <Paper>
              <FormAddress onUpdate={addAddress} />
            </Paper>

            <Title>Qual o seu telefone?</Title>
            <Paper>
              <PhoneField onUpdate={addPhone} />
            </Paper>
          </Grid>
          <Grid container item xs={12} md={6} direction="column">
            <Title>Informações do seu pedido:</Title>
            <Paper>
              <OrderInfo showOptions />
            </Paper>
          </Grid>
        </Grid>
      </Content>

      <CheckoutFooter>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={CHECKOUT_CONFIRMATION}
        >
          Confirmar pedido
        </Button>
      </CheckoutFooter>
    </Fragment>
  );
}

export default Checkout;
