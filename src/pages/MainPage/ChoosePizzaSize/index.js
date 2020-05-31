import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from 'contexts/Auth';
import { Typography, Grid, Card } from '@material-ui/core';
import pizzasSizes from 'fakes/pizzasSizes';
import {
  Title,
  PizzasGrid,
  StyledDivider,
  Pizza,
  PizzaText,
  StyledCardActionArea,
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
            <Card>
              <StyledCardActionArea component={Link} to={{ pathname: '/choose-pizza-flavours', state: pizza }}>
                <Pizza>
                  <PizzaText>{`${pizza.size}cm`}</PizzaText>
                </Pizza>

                <StyledDivider />

                <Typography variant="h5">{pizza.name}</Typography>
                <Typography>
                  {`${pizza.slices} fatias, ${pizza.flavours} ${singularOrPlural(pizza.flavours, 'sabor', 'sabores')}`}
                </Typography>
              </StyledCardActionArea>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </Fragment>
  );
}
export default ChoosePizzaSize;
