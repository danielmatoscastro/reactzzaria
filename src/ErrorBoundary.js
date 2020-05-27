/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends PureComponent {
    state = { hasError: false };

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      console.group('Erro');
      console.error('Erro: ', error);
      console.log('Stack: ', info.componentStack);
      console.groupEnd();
    }

    render() {
      const { hasError } = this.state;
      const { children } = this.props;

      return hasError
        ? (<h1>Ocorreu um problema :(</h1>)
        : children;
    }
}

ErrorBoundary.defaultProps = {
  children: '',
};

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
