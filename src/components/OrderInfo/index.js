import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, List, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { singularOrPlural } from 'helpers';
import { useOrder } from 'hooks';
import { ListItem } from './style';

function OrderInfo({ showOptions }) {
  const { order, removePizzaFromOrder } = useOrder();

  return (
    <List>
      {order.pizzas.map((pizza) => {
        const {
          id,
          pizzaFlavours,
          pizzaSize,
          quantity,
        } = pizza;
        const { name, slices, flavours } = pizzaSize;

        return (
          <ListItem key={id}>
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

            {showOptions && (
            <IconButton
              title="Remover"
              color="secondary"
              onClick={() => removePizzaFromOrder(id)}
            >
              <Close />
            </IconButton>
            )}
          </ListItem>
        );
      })}
    </List>
  );
}

OrderInfo.defaultProps = {
  showOptions: false,
};

OrderInfo.propTypes = {
  showOptions: PropTypes.bool,
};

export default OrderInfo;
