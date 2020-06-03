import React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';
import { singularOrPlural } from 'helpers';
import { useOrder } from 'hooks';

function OrderInfo() {
  const { order } = useOrder();

  return (
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
  );
}

export default OrderInfo;
