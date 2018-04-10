import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

const propTypes = {
  /** Name of the component */
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {};

const Button = props => (
  <button className={styles.container} onClick={props.onClick}>
    {props.label}
  </button>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
