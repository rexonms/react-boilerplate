import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Main from './containers/Main';
import './styles.scss';
import { initGoogleAnalytics } from './utils/ga';

initGoogleAnalytics();

// Route path="/" is required for the switch location prop for main.js.
// The location prop is used for transition effect
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="">
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
