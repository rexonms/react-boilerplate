import React from 'react';
import PropTypes from 'prop-types';

import styles from './Heading6.scss';

const Heading6 = props => (
  <h6 className={styles.default}>{props.labelText}</h6>
);

Heading6.defaultProps = {};

Heading6.propTypes = {
  /** Text for the component */
  labelText: PropTypes.string.isRequired,


};

export default Heading6;
