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
import { HOME } from 'routes';
import { Header, Paper, Divider } from './style';

function CheckoutSuccess() {
  const { userInfo: { user: { firstName } } } = useAuth();
  const { order } = useOrder();

  return (
    <Fragment>
      <Content>
        <Header>
          <Title variant="h4">{`Prontinho ${firstName}!`}</Title>
          <Typography>
            Seu pedido será entregue no endereço abaixo em até
          </Typography>

          <Typography variant="h6">
            40 minutos =)
          </Typography>
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
          color="secondary"
          size="large"
          component={Link}
          to={HOME}
        >
          {'<'}
          {' '}
          Voltar para a página inicial
        </Button>
      </CheckoutFooter>
    </Fragment>
  );
}

export default CheckoutSuccess;
