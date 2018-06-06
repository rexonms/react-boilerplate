import { createStore, compose, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import createReducer from './reducers';

export const history = createHistory({ queryKey: false });

function configuredStore(initialState = undefined) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(applyMiddleware(
      routerMiddleware(history),
      thunk,
    )),
  );
  store.asyncReducers = {};
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  // eslint-disable-next-line
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  // store.dispatch({ type: 'RESET' });
}

export default configuredStore;
