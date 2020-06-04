import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField as MaterialTextField } from '@material-ui/core';

function TextField({ xs, autoFocus, ...props }) {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        fullWidth
        variant="outlined"
        inputProps={{
          autoFocus,
        }}
        {...props}
      />
    </Grid>
  );
}

TextField.defaultProps = {
  xs: 12,
  autoFocus: false,
};

TextField.propTypes = {
  xs: PropTypes.number,
  autoFocus: PropTypes.bool,
};

export default TextField;
