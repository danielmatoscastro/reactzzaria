import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Button } from '@material-ui/core';
import {
  Content,
  Title,
  OrderInfo,
  CheckoutFooter,
} from 'components';
import { useAuth, useOrder } from 'hooks';
import { CHECKOUT_SUCCESS } from 'routes';
import { Header, Paper, Divider } from './style';

function CheckoutConfirmation() {
  const { userInfo: { user: { firstName } } } = useAuth();
  const { order, sendOrder } = useOrder();

  return (
    <Fragment>
      <Content>
        <Header>
          <Title variant="h4">{`Oi ${firstName}!`}</Title>
          <Typography>Por favor, confere se está tudo certo antes de finalizar?</Typography>
        </Header>

        <Container maxWidth="sm">
          <Paper>
            <Typography variant="h6">
              Seu pedido:
            </Typography>
            <OrderInfo />

            <Divider />

            <Typography variant="h6">Endereço para entrega:</Typography>
            <Typography>
              {order.address.address}
              {' n'}
              {' '}
              {order.address.number}
              {' '}
              {' '}
              {order.address.complement}
              <br />
              Bairro:
              {' '}
              {order.address.district}
              <br />
              CEP:
              {' '}
              {order.address.code}
              <br />
              {order.address.city}
              /
              {order.address.state}
            </Typography>

            <Divider />

            <Typography variant="h6">Telefone para contato:</Typography>
            <Typography>{order.phone}</Typography>
          </Paper>
        </Container>
      </Content>

      <CheckoutFooter justify="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to={CHECKOUT_SUCCESS}
          onClick={sendOrder}
        >
          Tudo certo!
        </Button>
      </CheckoutFooter>
    </Fragment>
  );
}

export default CheckoutConfirmation;
