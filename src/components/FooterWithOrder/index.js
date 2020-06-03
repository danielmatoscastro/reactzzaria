import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { useAuth } from 'hooks';
import { singularOrPlural } from 'helpers';
import { OrderContainer, ButtonsContainer, Button } from './style';

function FooterWithOrder({ buttons, location, history }) {
  const { userInfo: { user: { firstName } } } = useAuth();
  const { pizzaSize, pizzaFlavours } = location.state;
  const { name, slices, flavours } = pizzaSize;

  return (
    <Grid container>
      <OrderContainer>
        <Typography><b>{`${firstName}, seu pedido é: `}</b></Typography>
        <Typography>
          Pizza
          {' '}
          <b>{name.toUpperCase()}</b>
          {' '}
          {`- (${slices} ${singularOrPlural(slices, 'fatia', 'fatias')},`}
          {' '}
          {`${flavours} ${singularOrPlural(flavours, 'sabor', 'sabores')})`}
        </Typography>

        {pizzaFlavours && (
        <Typography>
          {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}
          {' '}
          <b>{pizzaFlavours.map((flavour) => flavour.name).join(', ')}</b>
        </Typography>
        )}
      </OrderContainer>

      <ButtonsContainer>
        <Button
          {...buttons.back}
          component="a"
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}
        />

        <Button {...buttons.action} component={Link} color="primary" />
      </ButtonsContainer>
    </Grid>
  );
}

FooterWithOrder.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      pizzaSize: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slices: PropTypes.number.isRequired,
        flavours: PropTypes.number.isRequired,
      }).isRequired,
      pizzaFlavours: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
      })),
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  buttons: PropTypes.shape().isRequired,
};

export default withRouter(FooterWithOrder);
