import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Grid, TextField as MaterialTextField } from '@material-ui/core';
import { Content, OrderInfo, CheckoutFooter } from 'components';
import { CHECKOUT_CONFIRMATION } from 'routes';
import { Paper, Title } from './style';

function TextField({ xs, autoFocus, ...props }) {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        fullWidth
        variant="outlined"
        inputProps={{
          autoFocus,
        }}
        {...props}
      />
    </Grid>
  );
}

TextField.defaultProps = {
  xs: 12,
  autoFocus: false,
};

TextField.propTypes = {
  xs: PropTypes.number,
  autoFocus: PropTypes.bool,
};

function Checkout() {
  return (
    <Fragment>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>Qual o endereço para entrega?</Title>
            <Paper>
              <Grid container spacing={2}>
                <TextField label="CEP" xs={4} autoFocus />
                <Grid item xs={8} />
                <TextField label="Rua" xs={9} />
                <TextField label="Número" xs={3} />
                <TextField label="Complemento" xs={12} />
                <TextField label="Cidade" xs={9} />
                <TextField label="Estado" xs={3} />
              </Grid>
            </Paper>

            <Title>Qual o seu telefone?</Title>
            <Paper>
              <TextField label="Telefone" xs={4} />
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
          Confirmar dados
        </Button>
      </CheckoutFooter>
    </Fragment>
  );
}

export default Checkout;
