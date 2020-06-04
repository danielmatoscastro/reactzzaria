import React, {
  useState,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { Grid, CircularProgress } from '@material-ui/core';
import { TextField } from 'components';
import cepMask from './cepMask';
import { initialState, cepReducer } from './cepReducer';

function FormAddress({ onUpdate }) {
  const [cep, setCep] = useState('');
  const [fetchingCep, setFetchingCep] = useState(false);
  const [addressState, dispatch] = useReducer(cepReducer, initialState);
  const numberField = useRef();
  const addressField = useRef();

  useEffect(() => {
    onUpdate(addressState);
  }, [addressState, onUpdate]);

  useEffect(() => {
    const fetchCep = async () => {
      if (cep.length === 9) {
        setFetchingCep(true);
        const response = await fetch(`https://ws.apicep.com/cep/${cep}.json`);
        setFetchingCep(false);

        if (!response.ok) {
          dispatch({ type: 'RESET' });
          addressField.current.focus();
        } else {
          const data = await response.json();

          if (!data.ok) {
            dispatch({
              type: 'FAIL',
              payload: {
                error: data.message,
              },
            });
          } else {
            dispatch({
              type: 'UPDATE_FULL_ADDRESS',
              payload: data,
            });
            numberField.current.focus();
          }
        }
      }
    };

    fetchCep();
  }, [cep]);

  function handleChangeCep(e) {
    setCep(cepMask(e.target.value));
  }

  function handleChangeField(e) {
    const { name, value } = e.target;

    dispatch({
      type: 'UPDATE_FIELD',
      payload: { name, value },
    });
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <TextField
        label="CEP"
        xs={4}
        autoFocus
        value={cep}
        onChange={handleChangeCep}
        error={!!addressState.error}
      />

      <Grid item xs={8}>
        {fetchingCep && <CircularProgress size={20} />}
      </Grid>

      {[
        {
          label: 'Rua',
          xs: 9,
          name: 'address',
          inputRef: addressField,
        },
        {
          label: 'Número',
          xs: 3,
          name: 'number',
          inputRef: numberField,
        },
        {
          label: 'Complemento',
          xs: 12,
          name: 'complement',
        },
        {
          label: 'Cidade',
          xs: 9,
          name: 'city',
        },
        {
          label: 'Estado',
          xs: 3,
          name: 'state',
        },
      ].map((field) => (
        <TextField
          {...field}
          key={field.name}
          value={addressState[field.name]}
          onChange={handleChangeField}
          disabled={fetchingCep}
        />
      ))}
    </Grid>
  );
}

FormAddress.defaultProps = {
  onUpdate: () => {},
};

FormAddress.propTypes = {
  onUpdate: PropTypes.func,
};

export default FormAddress;
