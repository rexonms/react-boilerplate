import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Loadable from 'react-loadable';

import { initGoogleAnalytics } from '../utils/ga';
import { history } from '../store';
import Styles from './App.scss'
const loading = () => <div> loading </div>
const Home = Loadable({
  loader: () => import('./Home/'),
  loading,
});
const MessageListPage = Loadable({
  loader: () => import('./MessageListPage/'),
  loading,
});

initGoogleAnalytics()

const App = props => (
  <div className={Styles.container}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/messages" component={MessageListPage}/>
      </Switch>
    </ConnectedRouter>
  </div>
);

App.propTypes = {
  //location: PropTypes.shape().isRequired,
};

export default App;
