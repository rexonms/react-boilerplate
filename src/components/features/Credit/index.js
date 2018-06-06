import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Credit.scss';

const propTypes = {
  // creditTable: PropTypes.shape({}).isRequired,
  creditRemaining: PropTypes.shape({
    label: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  }).isRequired,
  creditDisclaimer: PropTypes.string.isRequired,
};
const defaultProps = {};

const Credit = props => (
  <div className={`${Styles.container}`}>
    <div className={Styles.creditRemaining}>
      <p>{props.creditRemaining.label}</p>
      <p>{props.creditRemaining.amount}</p>
    </div>
    <p>{props.creditDisclaimer}</p>
  </div>
);

Credit.propTypes = propTypes;
Credit.defaultProps = defaultProps;

export default Credit;
