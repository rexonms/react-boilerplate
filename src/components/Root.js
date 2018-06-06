import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import './../public-path';
import App from './App';

const propTypes = {
  store: PropTypes.shape({}).isRequired,
  args: PropTypes.shape({}).isRequired,
};

const Root = ({ store, args }) => (
  <Provider store={store}>
    <App rootDivId={args.cms} />
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
