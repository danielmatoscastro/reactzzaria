import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import ErrorBoundary from 'ErrorBoundary';
import * as serviceWorker from 'serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Root />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
