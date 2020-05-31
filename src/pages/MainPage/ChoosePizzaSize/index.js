import React, { Fragment, useContext } from 'react';
import { AuthContext } from 'contexts/Auth';
import { Typography, Grid } from '@material-ui/core';
import pizzasSizes from 'fakes/pizzasSizes';
import {
  Title,
  PizzasGrid,
  StyledDivider,
  StyledPaper,
  Pizza,
  PizzaText,
} from './style';

const singularOrPlural = (amount, singular, plural) => (amount === 1 ? singular : plural);

function ChoosePizzaSize() {
  const { userInfo: { user: { firstName } } } = useContext(AuthContext);

  return (
    <Fragment>
      <Grid container direction="column" alignItems="center">
        <Title variant="h4">
          {`O que vai ser hoje, ${firstName}?`}
        </Title>

        <Title variant="h5">
          Escolha o tamanho da pizza:
        </Title>
      </Grid>

      <PizzasGrid>
        {pizzasSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <StyledPaper>
              <Pizza>
                <PizzaText>{`${pizza.size}cm`}</PizzaText>
              </Pizza>

              <StyledDivider />

              <Typography variant="h5">{pizza.name}</Typography>
              <Typography>
                {`${pizza.slices} fatias, ${pizza.flavours} ${singularOrPlural(pizza.flavours, 'sabor', 'sabores')}`}
              </Typography>
            </StyledPaper>
          </Grid>
        ))}
      </PizzasGrid>
    </Fragment>
  );
}
export default ChoosePizzaSize;
