import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  TextField as MaterialTextField,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import { Content, Footer } from 'components';
import { useOrder } from 'hooks';
import { singularOrPlural } from 'helpers';
import { Paper, Title, ContentFooter } from './style';

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
  const { order } = useOrder();

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
              <List>
                {order.pizzas.map((pizza, index) => {
                  const { pizzaFlavours, pizzaSize, quantity } = pizza;
                  const { name, slices, flavours } = pizzaSize;

                  return (
                  // eslint-disable-next-line react/no-array-index-key
                    <ListItem key={index}>
                      <Typography>
                        <b>{quantity}</b>
                        {' '}
                        {singularOrPlural(quantity, 'Pizza', 'Pizzas')}
                        {' '}
                        <b>{name.toUpperCase()}</b>
                        {' '}
                        {`- (${slices} ${singularOrPlural(slices, 'fatia', 'fatias')},`}
                        {' '}
                        {`${flavours} ${singularOrPlural(flavours, 'sabor', 'sabores')})`}
                        <br />
                        {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}
                        {' '}
                        <b>{pizzaFlavours.map((flavour) => flavour.name).join(', ')}</b>
                      </Typography>
                    </ListItem>
                  );
                })}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Content>

      <Footer>
        <ContentFooter>
          <Button variant="contained" color="primary">
            Confirmar dados
          </Button>
        </ContentFooter>
      </Footer>
    </Fragment>
  );
}

export default Checkout;
