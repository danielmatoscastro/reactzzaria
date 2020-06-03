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
  const { sendOrder } = useOrder();

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
              Rua Oi, número 10, Compl., Bairro, CEP: 10100-10 - Cidade/UF
            </Typography>

            <Divider />

            <Typography variant="h6">Telefone para contato:</Typography>
            <Typography>(12) 12345-1234</Typography>
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
