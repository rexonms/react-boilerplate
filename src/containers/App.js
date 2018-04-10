import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Loadable from 'react-loadable';

import { initGoogleAnalytics } from '../utils/ga';
import { history } from '../store';
import Styles from './App.scss';
import LoadingBars from '../components/Loading/LoadingBars/index';

const propTypes = {};
const defaultProps = {};
const loading = () => <LoadingBars />;
const Home = Loadable({
  loader: () => import('./Home/'),
  loading,
});
const MessageListPage = Loadable({
  loader: () => import('./MessageListPage/'),
  loading,
});
const MessageItemPage = Loadable({
  loader: () => import('./MessageItemPage/'),
  loading,
});

initGoogleAnalytics()

const App = props => (
  <div className={Styles.container}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/messages" component={MessageListPage}/>
        <Route path="/messages/:recipientEmail" component={MessageItemPage} />
      </Switch>
    </ConnectedRouter>
  </div>
);

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
