import React from 'react';
import { Typography, Grid, Card } from '@material-ui/core';
import { CHOOSE_PIZZA_FLAVOURS } from 'routes';
import {
  Content,
  ContentHeader,
  Title,
  PizzasGrid,
  Divider,
  CardLink,
} from 'components';
import { singularOrPlural } from 'helpers';
import { useAuth, useCollection } from 'hooks';
import { Pizza, PizzaText } from './style';

function ChoosePizzaSize() {
  const { userInfo: { user: { firstName } } } = useAuth();
  const pizzasSizes = useCollection('pizzasSizes');

  if (!pizzasSizes) {
    return 'Loading...';
  }

  if (pizzasSizes.length === 0) {
    return 'Não há dados.';
  }

  return (
    <Content>
      <ContentHeader>
        <Title variant="h4">
          {`O que vai ser hoje, ${firstName}?`}
        </Title>

        <Title variant="h5">
          Escolha o tamanho da pizza:
        </Title>
      </ContentHeader>

      <PizzasGrid>
        {pizzasSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <CardLink to={{ pathname: CHOOSE_PIZZA_FLAVOURS, state: { pizzaSize: pizza } }}>
                <Pizza>
                  <PizzaText>{`${pizza.size}cm`}</PizzaText>
                </Pizza>

                <Divider />

                <Typography variant="h5">{pizza.name}</Typography>
                <Typography>
                  {`${pizza.slices} fatias, ${pizza.flavours} ${singularOrPlural(pizza.flavours, 'sabor', 'sabores')}`}
                </Typography>
              </CardLink>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </Content>
  );
}
export default ChoosePizzaSize;
