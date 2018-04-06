import React from 'react';
import PropTypes from 'prop-types';

import styles from './Paragraph.scss';

const Paragraph = props => (
  <p className={`${styles[props.size]} ${styles[props.color]}`}>
    {props.label}
  </p>
);

Paragraph.defaultProps = {
  size: '',
  color: '',
};

Paragraph.propTypes = {
  /** Text that will be displayed */
  label: PropTypes.string.isRequired,
  /** Size of the text. Values can be 'small' or 'large' */
  size: PropTypes.string,
  /** Color of the text. Values can be 'light' or 'dark' */
  color: PropTypes.string,
};

export default Paragraph;
