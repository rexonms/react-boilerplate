import React from 'react';
import PropTypes from 'prop-types';

import styles from './HeadingScript.scss';

const propTypes = {
  /** Name of the component */
  text: PropTypes.string.isRequired,
};

const defaultProps = {};

const HeadingScript = props => (
  <h1 className={`${styles.container}`}>
    {props.text}
  </h1>
);

HeadingScript.defaultProps = defaultProps;
HeadingScript.propTypes = propTypes;

export default HeadingScript;
