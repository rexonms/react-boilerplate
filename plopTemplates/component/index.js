import React from 'react';
import PropTypes from 'prop-types';

import styles from './{Components}.scss';

const Component = props => (
  <div className={`${styles.container}`}>
    {props.name}
  </div>
);

Component.defaultProps = {};

Component.propTypes = {
  /** Name of the component */
  name: PropTypes.string.isRequired,


};

export default Component;
