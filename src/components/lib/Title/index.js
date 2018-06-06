import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Title.scss';

const propTypes = {
  /** Text for title */
  title: PropTypes.string.isRequired,
};

const defaultProps = {};

const Title = props => (
  <div className={`${Styles.container}`}>
    <h2>{props.title}</h2>
  </div>
);

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
