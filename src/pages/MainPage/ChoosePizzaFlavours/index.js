import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { HOME, CHOOSE_PIZZA_QUANTITY } from 'routes';
import {
  Content,
  ContentHeader,
  Title,
  PizzasGrid,
  Divider,
  CardLink,
  Footer,
} from 'components';
import { singularOrPlural, toMoney } from 'helpers';
import pizzasFlavours from 'fakes/pizzasFlavours';
import { Card, Img, Checkbox } from './style';

const Label = ({ children }) => <CardLink component="label">{children}</CardLink>;
Label.propTypes = {
  children: PropTypes.node.isRequired,
};

function getFlavoursNamesAndIds(checkboxes) {
  return Object.entries(checkboxes)
    .filter(([, value]) => !!value)
    .map(([id]) => ({
      id,
      name: pizzasFlavours.find((pizza) => pizza.id === id).name,
    }));
}

function checkboxesCheckeds(checkboxes) {
  return Object.values(checkboxes).filter(Boolean);
}

function ChoosePizzaFlavours({ location }) {
  const [checkboxes, setCheckboxes] = useState({});

  if (!location.state) {
    return <Redirect to={HOME} />;
  }

  const { state: { pizzaSize: { id, flavours } } } = location;

  const handleCheckboxChange = (pizzaId) => (e) => {
    const qtTrues = checkboxesCheckeds(checkboxes).length;

    if (qtTrues === flavours && e.target.checked === true) {
      return;
    }

    setCheckboxes((checks) => ({
      ...checks,
      [pizzaId]: e.target.checked,
    }));
  };

  return (
    <Fragment>
      <Content>
        <ContentHeader>
          <Title variant="h5">
            {`Escolha até ${flavours} ${singularOrPlural(flavours, 'sabor', 'sabores')}:`}
          </Title>
        </ContentHeader>

        <PizzasGrid>
          {pizzasFlavours.map((pizza) => (
            <Grid item key={pizza.id} xs>
              <Card checked={!!checkboxes[pizza.id]}>
                <Label>
                  <Checkbox
                    checked={!!checkboxes[pizza.id]}
                    onChange={handleCheckboxChange(pizza.id)}
                  />
                  <Img src={pizza.image} alt={pizza.name} />

                  <Divider />

                  <Typography>{pizza.name}</Typography>
                  <Typography variant="h5">
                    {toMoney(pizza.value[id])}
                  </Typography>
                </Label>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>

      <Footer buttons={{
        back: {
          children: 'Mudar tamanho',
        },
        action: {
          to: {
            pathname: CHOOSE_PIZZA_QUANTITY,
            state: {
              ...location.state,
              pizzaFlavours: getFlavoursNamesAndIds(checkboxes),
            },
          },
          children: 'Quantas pizzas?',
          disabled: checkboxesCheckeds(checkboxes).length === 0,
        },
      }}
      />
    </Fragment>
  );
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      pizzaSize: PropTypes.shape({
        id: PropTypes.string.isRequired,
        flavours: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ChoosePizzaFlavours;
