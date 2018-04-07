import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import AppLoading from '../../components/AppLoading/';
import './styles.scss';

const loading = () => <AppLoading />;
// const Header = Loadable({
//   loader: () => import('./../../components/Header/'),
//   loading,
// });
const Home = Loadable({
  loader: () => import('./../Home'),
  loading,
});
// const Award = Loadable({
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
          <Switch location={props.location}>
            <Route exact path="/" component={Home} />
            {/*<Route path="/award" component={Award} />*/}
            {/*<Route path="/leaderboard" component={Leaderboard} />*/}
          </Switch>
        </React.Fragment>
    </div>
  </div>
);

Main.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default Main;
