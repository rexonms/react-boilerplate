import React from 'react';
import PropTypes from 'prop-types';

import Styles from './DateExpiration.scss';

const propTypes = {
  /** Epoch timestamp */
  timestamp: PropTypes.number.isRequired,
  /** Min num of days that the message should display */
  minDay: PropTypes.number,
  /** String that displays expired */
  expired: PropTypes.string.isRequired,
  /** String that displays expired in n days */
  expiresIn: PropTypes.shape({
    singular: PropTypes.string.isRequired,
    plural: PropTypes.string.isRequired,
  }).isRequired,
};

const defaultProps = {
  minDay: 30,
};

export const epochDay = 60 * 60 * 24;
export const currentTimeStamp = Math.floor(Date.now() / 1000);

const getText = (text, day) => text.replace('#NUM#', day);

export const timestampExpiresIn = (expiringTimestamp, minDay) => {
  const remainingDays = (expiringTimestamp - currentTimeStamp) / epochDay;
  // Already expired
  if (expiringTimestamp < currentTimeStamp) {
    return -1;
  }
  // Show remaining days
  if (remainingDays < minDay) {
    return remainingDays;
  }
  return 0;
};

const DateExpiration = (props) => {
  const expiresInDay = timestampExpiresIn(props.timestamp, props.minDay);
  if (expiresInDay === 0) {
    return null;
  }

  if (expiresInDay === -1) {
    return (
      <span className={`${Styles.container}`}>
        <p>{props.expired}</p>
      </span>
    );
  }
  return (
    <span className={`${Styles.container}`}>
      <p>
        {expiresInDay === 1 ?
          getText(props.expiresIn.singular, expiresInDay) :
          getText(props.expiresIn.plural, expiresInDay)}
      </p>
    </span>
  );
};

DateExpiration.propTypes = propTypes;
DateExpiration.defaultProps = defaultProps;

export default DateExpiration;
