import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import firebase, { db } from 'services/firebase';
import { useAuth } from 'hooks';

const OrderContext = createContext();

function OrderProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [orderInProgress, setOrderInProgress] = useState(false);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({});
  const { userInfo } = useAuth();

  function newPizza(pizza) {
    return { ...pizza, id: v4() };
  }

  function addPizzaToOrder(pizza) {
    if (orderInProgress) {
      setPizzas((p) => p.concat(newPizza(pizza)));
    } else {
      setOrderInProgress(true);
      setPizzas([newPizza(pizza)]);
    }
  }

  async function sendOrder() {
    await db.collection('orders').add({
      userId: userInfo.user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      address,
      phone,
      pizzas: pizzas.map((pizza) => ({
        size: pizza.pizzaSize,
        flavours: pizza.pizzaFlavours,
        quantity: pizza.quantity,
      })),
    });

    setOrderInProgress(false);
  }

  function removePizzaFromOrder(id) {
    setPizzas((p) => p.filter((pizza) => pizza.id !== id));
  }

  return (
    <OrderContext.Provider value={{
      addPizzaToOrder,
      sendOrder,
      removePizzaFromOrder,
      addAddress: setAddress,
      addPhone: setPhone,
      order: {
        pizzas,
        address,
        phone,
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
