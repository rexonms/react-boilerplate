import React from 'react';
import PropTypes from 'prop-types';

import styles from './Album.scss';
import Heading6 from '../Typography/H6/index';
import Paragraph from '../Typography/Paragraph/index';

const propTypes = {
  /** Title of the Album */
  title: PropTypes.string.isRequired,
  /** Image source */
  imageSrc: PropTypes.string.isRequired,
};

const defaultProps = {};

const Album = props => (
  <div className={`${styles.container}`}>
    <div className={styles.image}>
      <img src={props.imageSrc} />
    </div>
    <div className={styles.desc}>
      <Paragraph label={props.title} size='extraSmall'/>
    </div>
    {props.name}
  </div>
);

Album.defaultProps = defaultProps;
Album.propTypes = propTypes;

export default Album;
