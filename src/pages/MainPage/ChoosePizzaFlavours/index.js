import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { HOME } from 'routes';
import {
  ContentHeader,
  Title,
  PizzasGrid,
  Divider,
  CardLink,
} from 'components';
import { singularOrPlural } from 'helpers';
import pizzasFlavours from 'fakes/pizzasFlavours';
import { Card, Img, Checkbox } from './style';

const Label = ({ children }) => <CardLink component="label">{children}</CardLink>;
Label.propTypes = {
  children: PropTypes.node.isRequired,
};

function ChoosePizzaFlavours({ location }) {
  const [checkboxes, setCheckboxes] = useState({});
  const { state: { id, flavours } } = location;

  if (!location.state) {
    return <Redirect to={HOME} />;
  }

  const handleCheckboxChange = (pizzaId) => (e) => {
    const qtTrues = Object.values(checkboxes).filter(Boolean).length;

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
                  {pizza.value[id]}
                </Typography>
              </Label>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </Fragment>
  );
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number.isRequired,
      flavours: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ChoosePizzaFlavours;
