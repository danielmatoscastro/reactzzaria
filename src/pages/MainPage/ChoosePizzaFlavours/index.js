import React from 'react';
import PropTypes from 'prop-types';

function ChoosePizzaFlavours({ location }) {
  console.log(location);
  return (
    <h1>Oi</h1>
  );
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape(),
  }).isRequired,
};

export default ChoosePizzaFlavours;
