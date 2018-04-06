import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.scss';

const Title = props => (
  <div className={`${styles.container}`}>
    {props.name}
  </div>
);

Title.defaultProps = {};

Title.propTypes = {
  /** Name of the component */
  name: PropTypes.string.isRequired,


};

export default Title;
