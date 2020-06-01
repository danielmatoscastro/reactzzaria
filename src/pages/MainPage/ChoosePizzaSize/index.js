import React from 'react';
import { Typography, Grid, Card } from '@material-ui/core';
import pizzasSizes from 'fakes/pizzasSizes';
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
import { useAuth } from 'hooks';
import { Pizza, PizzaText } from './style';

function ChoosePizzaSize() {
  const { userInfo: { user: { firstName } } } = useAuth();

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
              <CardLink to={{ pathname: CHOOSE_PIZZA_FLAVOURS, state: pizza }}>
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
