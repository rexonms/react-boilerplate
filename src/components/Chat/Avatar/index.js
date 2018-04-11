import React from 'react';
import PropTypes from 'prop-types';

import styles from './Avatar.scss';

const propTypes = {
  /** URL of the image to be displayed */
  imageURL: PropTypes.string.isRequired,
  /** Alt text for image */
  imageAltText: PropTypes.string.isRequired,
};

const defaultProps = {};

const Avatar = props => (
  <div className={`${styles.container}`}>
    <img src={props.imageURL} alt={props.imageAltText} />
  </div>
);

Avatar.defaultProps = defaultProps;
Avatar.propTypes = propTypes;

export default Avatar;
