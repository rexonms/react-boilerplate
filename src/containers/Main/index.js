import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Route } from 'react-router';

import createHistory from 'history/createBrowserHistory';

import Loadable from 'react-loadable';

import AppLoading from '../../components/AppLoading/';
import './styles.scss';

const history = createHistory();

const loading = () => <AppLoading />;
// const Header = Loadable({
//   loader: () => import('./../../components/Header/'),
//   loading,
// });
const Home = Loadable({
  loader: () => import('./../Home/'),
  loading,
});
const Albums = Loadable({
  loader: () => import('./../Albums/'),
  loading,
});// const Award = Loadable({
//   loader: () => import('./../Award'),
//   loading,
// });
// const Leaderboard = Loadable({
//   loader: () => import('./../Leaderboard'),
//   loading,
// });

const Main = props => (
  <div className="main">
    {/*<Header />*/}
    <div className="page-container-outer">
        <React.Fragment>
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/albums" component={Albums} />
            </div>
          </ConnectedRouter>
        </React.Fragment>
    </div>
  </div>
);

Main.propTypes = {
  //location: PropTypes.shape().isRequired,
};

export default Main;
