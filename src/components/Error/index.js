import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ErrorBox = props => (
  <section className="error-box">
    <div className="error-box__icon" />
    <div className="error-box__text">{props.errorMessage}</div>
  </section>
);

ErrorBox.defaultProps = {
  errorMessage: 'Oops! an error has occurred',
};

ErrorBox.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorBox;
