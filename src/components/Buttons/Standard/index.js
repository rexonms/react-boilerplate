import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Button.scss';


const Button = props =>
  (
    <button
      className={`${styles.button} ${styles[props.size]}`}
      onClick={props.onClickHandler}
    >
      <span>{props.label}</span>
    </button>
  );


Button.defaultProps = {
  size: '',
}

Button.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
}

export default Button;
