import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Comp = props => (
  <div className={`${styles.container}`}>
    {props.name}
  </div>
);

Comp.defaultProps = {};

Comp.propTypes = {
  /** Name of the component */
  name: PropTypes.string.isRequired,


};

export default Comp;
