import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Container } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { HOME, CHOOSE_PIZZA_QUANTITY } from 'routes';
import {
  Content,
  ContentHeader,
  Title,
  PizzasGrid,
  Divider,
  CardLink,
} from 'components';
import { singularOrPlural, toMoney } from 'helpers';
import pizzasFlavours from 'fakes/pizzasFlavours';
import { useAuth } from 'hooks';
import {
  Card,
  Img,
  Checkbox,
  Footer,
  OrderContainer,
  Button,
} from './style';

const Label = ({ children }) => <CardLink component="label">{children}</CardLink>;
Label.propTypes = {
  children: PropTypes.node.isRequired,
};

function ChoosePizzaFlavours({ location }) {
  const [checkboxes, setCheckboxes] = useState({});
  const { userInfo: { user: { firstName } } } = useAuth();
  const {
    state: {
      id, flavours, name, slices,
    },
  } = location;

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

      <Footer>
        <Container>
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
            </OrderContainer>

            <Grid item>
              <Button to={HOME}>Mudar tamanho</Button>
              <Button to={CHOOSE_PIZZA_QUANTITY}>Quantas pizzas?</Button>
            </Grid>
          </Grid>
        </Container>
      </Footer>

    </Fragment>
  );
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number.isRequired,
      flavours: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slices: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ChoosePizzaFlavours;
