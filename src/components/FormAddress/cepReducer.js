export const initialState = {
  code: '',
  address: '',
  number: '',
  district: '',
  complement: '',
  city: '',
  state: '',
  error: null,
};

export const cepReducer = (state, action) => {
  if (action.type === 'UPDATE_FULL_ADDRESS') {
    return { ...state, ...action.payload, error: null };
  }

  if (action.type === 'UPDATE_FIELD') {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === 'FAIL') {
    return {
      ...initialState,
      error: action.payload.error,
    };
  }

  if (action.type === 'RESET') {
    return initialState;
  }

  return state;
};
