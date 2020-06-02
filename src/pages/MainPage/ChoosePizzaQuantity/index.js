import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  Content,
  ContentHeader,
  Title,
  Footer,
} from 'components';
import { HOME, CHECKOUT } from 'routes';
import { useOrder } from 'hooks';
import { ContentMain, Input, ButtonAddPizza } from './style';

function ChoosePizzaQuantity({ location }) {
  const [quantity, setQuantity] = useState(1);
  const { addPizzaToOrder } = useOrder();

  if (!location.state) {
    return <Redirect to={HOME} />;
  }

  function handleChange(e) {
    const { value } = e.target;
    if (value >= 1) {
      setQuantity(value);
    }
  }

  function addPizza() {
    addPizzaToOrder({
      size: location.state.pizzaSize.id,
      flavours: location.state.pizzaFlavours.map((f) => f.id),
      quantity,
    });
  }

  return (
    <Fragment>
      <Content>
        <ContentHeader>
          <Title variant="h5">
            Quantas pizzas você gostaria
            <br />
            {' '}
            de pedir com esses sabores?
          </Title>
        </ContentHeader>

        <ContentMain>
          <Input value={quantity} onChange={handleChange} autoFocus />
          <ButtonAddPizza to={HOME} onClick={addPizza}>
            Adicionar e
            <br />
            {' '}
            montar outra
          </ButtonAddPizza>
        </ContentMain>
      </Content>

      <Footer buttons={{
        back: { children: 'Mudar sabores' },
        action: { to: CHECKOUT, children: 'Finalizar compra', onClick: addPizza },
      }}
      />
    </Fragment>
  );
}

ChoosePizzaQuantity.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape().isRequired,
  }).isRequired,
};

export default ChoosePizzaQuantity;
