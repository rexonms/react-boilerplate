import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Button.scss';


const ButtonIcon = props =>
  (
    <button
      className={`${styles.button} ${styles.buttonIcon} ${styles[props.size]}`}
      onClick={props.onClickHandler}
    >
      <span>{props.label}</span>
      <span className={`${styles.icon} ${styles[props.icon]}`} />
    </button>
  );


ButtonIcon.defaultProps = {
  size: '',
}

ButtonIcon.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
}

export default ButtonIcon;
