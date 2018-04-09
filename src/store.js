import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

export const history = createHistory({ queryKey: false });

const store = createStore(
  reducer, undefined,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));

export default store;
