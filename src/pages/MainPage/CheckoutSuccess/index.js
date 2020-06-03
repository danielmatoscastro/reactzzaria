import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Button } from '@material-ui/core';
import {
  Content,
  Title,
  OrderInfo,
  CheckoutFooter,
} from 'components';
import { useAuth } from 'hooks';
import { HOME } from 'routes';
import { Header, Paper, Divider } from './style';

function CheckoutSuccess() {
  const { userInfo: { user: { firstName } } } = useAuth();

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
