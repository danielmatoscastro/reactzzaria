import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { HOME } from 'routes';
import { ContentHeader, Title } from 'components';
import { singularOrPlural } from 'helpers';

function ChoosePizzaFlavours({ location }) {
  if (!location.state) {
    return <Redirect to={HOME} />;
  }

  const { state: { flavours } } = location;
  return (
    <ContentHeader>
      <Title variant="h5">
        {`Escolha até ${flavours} ${singularOrPlural(flavours, 'sabor', 'sabores')}:`}
      </Title>
    </ContentHeader>
  );
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      flavours: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ChoosePizzaFlavours;
