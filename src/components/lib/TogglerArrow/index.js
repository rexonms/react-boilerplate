import React from 'react';
import PropTypes from 'prop-types';

import Styles from './TogglerArrow.scss';

const propTypes = {
  /** Toggle Button status */
  expanded: PropTypes.bool.isRequired,
};
const defaultProps = {};

const TogglerArrow = props => (
  <button
    className={props.expanded ?
      Styles.container :
      `${Styles.container} ${Styles.flipped}`
    }
  />
);

TogglerArrow.propTypes = propTypes;
TogglerArrow.defaultProps = defaultProps;

export default TogglerArrow;
