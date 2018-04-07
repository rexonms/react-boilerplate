import React from 'react';
import PropTypes from 'prop-types';

import styles from './Avatar.scss';

const propTypes = {
  /** URL of the image to be displayed */
  imageURL: PropTypes.string.isRequired,
};

const defaultProps = {};

const Avatar = props => (
  <div className={`${styles.container}`}>
    <img src={props.imageURL} />
  </div>
);

Avatar.defaultProps = defaultProps;
Avatar.propTypes = propTypes;

export default Avatar;
