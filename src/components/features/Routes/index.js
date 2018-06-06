import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable';

import Styles from './Routes.scss';
import { history } from '../../../configuredStore';
import LoadingBars from '../../lib/Loading/LoadingBars/index';


const propTypes = {
  data: PropTypes.shape({
    tabs: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
const defaultProps = {};
const loading = () => <LoadingBars />;
const Credit = Loadable({
  loader: () => import('../../../containers/CreditContainer/index'),
  loading,
});
const Eating = Loadable({
  loader: () => import('../../../containers/EatingContainer/index'),
  loading,
});

const Routes = props => (
  <ConnectedRouter history={history}>
    <Router>
      <React.Fragment>
        <div className={Styles.container}>
          {props.data.tabs.map(tab => (
            <NavLink
              key={tab.id}
              href={`/${tab.href}`}
              to={`/${tab.href}`}
              className={Styles.navTab}
              activeClassName={Styles.navTabSelected}
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
        <Route exact path="/credit" component={Credit} />
        <Route path="/" component={Eating} />
      </React.Fragment>
    </Router>
  </ConnectedRouter>
);

Routes.propTypes = propTypes;
Routes.defaultProps = defaultProps;

export default Routes;
