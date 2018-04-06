import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Title = props => (
  <div>
    <h1 className={`title ${props.type}`}>{props.label}</h1>
  </div>
);

Title.defaultProps = {
  type: 'default',
};

Title.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Title;
