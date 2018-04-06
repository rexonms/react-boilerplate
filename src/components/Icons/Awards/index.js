import React from 'react';
import PropTypes from 'prop-types';

import styles from './Awards.scss';

const IconAward = props => (
  <span className={`${styles.iconAward} ${styles[props.type]} ${styles[props.size]}`} />
);

IconAward.defaultProps = {
  size: '',
};

IconAward.propTypes = {
  /** Name of the icon */
  type: PropTypes.string.isRequired,
  /** Size of the icon */
  size: PropTypes.string,

};

export default IconAward;
