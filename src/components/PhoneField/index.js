import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'components';
import phoneMask from './phoneMask';

function PhoneField({ onUpdate }) {
  const [phone, setPhone] = useState('');

  useEffect(() => {
    onUpdate(phone);
  }, [phone, onUpdate]);

  function handleChangePhone(e) {
    setPhone(phoneMask(e.target.value));
  }

  return (
    <TextField
      label="Telefone"
      xs={4}
      value={phone}
      onChange={handleChangePhone}
    />
  );
}

PhoneField.defaultProps = {
  onUpdate: () => {},
};

PhoneField.propTypes = {
  onUpdate: PropTypes.func,
};

export default PhoneField;
