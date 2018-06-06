import React from 'react';
import PropTypes from 'prop-types';

import bundleVersion from '../version';
import './../styles/global.scss';
import Styles from '../components/App.scss';
import HomeContainer from './../containers/HomeContainer/';

const propTypes = {
  /** Used for overriding the css styles for Drupal vs AEM */
  rootDivId: PropTypes.string.isRequired,
};
const defaultProps = {};

const App = props => (
  <div
    className={`${Styles.container} ${Styles[props.rootDivId]}`}
    bundleversion={bundleVersion}
  >
    <HomeContainer />
  </div>
);

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
