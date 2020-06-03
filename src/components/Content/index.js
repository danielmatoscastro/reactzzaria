import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { Main } from './style';

function Content({ children, ...props }) {
  return (
    <Main {...props}>
      <Container>
        {children}
      </Container>
    </Main>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
