import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Footer';
import { ContentFooter } from './style';

function CheckoutFooter({ justify, children }) {
  return (
    <Footer>
      <ContentFooter justify={justify}>
        {children}
      </ContentFooter>
    </Footer>
  );
}

CheckoutFooter.defaultProps = {
  justify: 'flex-end',
};

CheckoutFooter.propTypes = {
  justify: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CheckoutFooter;
