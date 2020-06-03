import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import FooterWithOrder from 'components/FooterWithOrder';
import { ContentFooter } from './style';

function Footer({ children, ...props }) {
  return (
    <ContentFooter>
      <Container>
        {children || <FooterWithOrder {...props} />}
      </Container>
    </ContentFooter>
  );
}

Footer.defaultProps = {
  children: undefined,
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
