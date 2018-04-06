import React from 'react';
import PropTypes from 'prop-types';

import styles from './Avatar.scss';

const Avatar = props => (
  <div className={`${styles.container}`}>
    <img src={props.imageURL} />
  </div>
);

Avatar.defaultProps = {};

Avatar.propTypes = {
  /** Url of the image */
  imageURL: PropTypes.string.isRequired,
};

export default Avatar;
