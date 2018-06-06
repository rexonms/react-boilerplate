import React from 'react';
import { render } from 'react-dom';

import configuredStore from './configuredStore';
import Root from './components/Root';
import { setInitialArguments } from './containers/HomeContainer/ducks/';
import { initGoogleAnalytics } from './utils/ga';
import './debugger';

const store = configuredStore();

// Attach the app name to the window object so that it can be accessed from browser
window.__ATM_SAMPLE_APP_APP_REACT_JS__ = (args) => {
  // Update the store with args
  store.dispatch(setInitialArguments(args));
  initGoogleAnalytics(args.gaId);
  return render(<Root store={store} args={args} />, document.getElementById(args.divId));
};
