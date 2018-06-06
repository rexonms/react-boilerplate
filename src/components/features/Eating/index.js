import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Eating.scss';

const propTypes = {
  eastingDisclaimer: PropTypes.string.isRequired,
};
const defaultProps = {};

const Eating = props => (
  <div className={`${Styles.container}`}>
    <p>{props.eastingDisclaimer}</p>
  </div>
);

Eating.propTypes = propTypes;
Eating.defaultProps = defaultProps;

export default Eating;
