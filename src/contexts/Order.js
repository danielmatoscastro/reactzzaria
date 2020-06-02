import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const OrderContext = createContext();

function OrderProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);


  function addPizzaToOrder(pizza) {
    setPizzas((p) => p.concat([pizza]));
  }

  return (
    <OrderContext.Provider value={{
      addPizzaToOrder,
      order: {
        pizzas,
      },
    }}
    >
      {children}
    </OrderContext.Provider>
  );
}

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { OrderContext, OrderProvider };
