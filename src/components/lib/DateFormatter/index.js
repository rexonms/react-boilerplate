import React from 'react';
import PropTypes from 'prop-types';

import Styles from './DateFormatter.scss';

const propTypes = {
  timestamp: PropTypes.number.isRequired,
  country: PropTypes.string,
  yearFormat: PropTypes.string,
};

const defaultProps = {
  country: 'US',
  yearFormat: 'YY',
};

const setDoubleDigits = (num) => {
  let newNum = num.toString();
  newNum = newNum.length === 1 ? `0${newNum}` : newNum;
  return newNum;
};

// https://en.wikipedia.org/wiki/Date_format_by_country
export const ymdCountries = ['AF', 'AU', 'BT', 'CA', 'CN', 'CU', 'HK', 'HU', 'IN', 'IR', 'JM', 'JP', 'KP', 'KR', 'MO', 'MV', 'MN', 'MM', 'NP', 'NO', 'SG', 'ZA', 'LK', 'SE', 'TW', 'UZ'];
export const mdyCountries = ['US', 'AS', 'BS', 'FM', 'Gl', 'GU', 'KE', 'MH', 'MP', 'PK', 'PA', 'PH', 'PR', 'SO', 'TG', 'UM'];
const getDate = (props) => {
  const d = new Date(props.timestamp * 1000);
  let yy = d.getUTCFullYear();
  if (props.yearFormat === 'YY') {
    yy = yy.toString().substring(2, 4);
  }
  const mm = setDoubleDigits(d.getUTCMonth() + 1);
  const dd = setDoubleDigits(d.getUTCDate());
  if (mdyCountries.includes(props.country)) {
    return `${mm}/${dd}/${yy}`;
  } else if (ymdCountries.includes(props.country)) {
    return `${yy}/${mm}/${dd}`;
  }
  return `${dd}/${mm}/${yy}`;
};

const DateFormatter = props => (
  <div className={`${Styles.container}`}>
    <p>{getDate(props)}</p>
  </div>
);

DateFormatter.propTypes = propTypes;
DateFormatter.defaultProps = defaultProps;

export default DateFormatter;
