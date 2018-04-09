import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Loadable from 'react-loadable';


import store, { history } from './store';
import './styles.scss';
import { initGoogleAnalytics } from './utils/ga';

const loading = () => <div>LOADING ***** </div>;

const Home = Loadable({
  loader: () => import('./containers/Home/'),
  loading,
});
const Albums = Loadable({
  loader: () => import('./containers/Albums/'),
  loading,
});

initGoogleAnalytics();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/albums" component={Albums}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
