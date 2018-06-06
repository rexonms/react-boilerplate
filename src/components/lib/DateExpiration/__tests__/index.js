import React from 'react';
import { shallow } from 'enzyme';

import DateExpiration, { timestampExpiresIn, currentTimeStamp, epochDay } from '../index';
import { props } from './../index.stories';
import Styles from '../DateExpiration.scss';

describe('DateExpiration Component', () => {
  it('renders with proper className', () => {
    const wrapper = shallow(<DateExpiration {...props} />);
    expect(wrapper.exists(Styles.container)).toBe(true);
  });
});

describe('displayWarning()', () => {
  const minDay = 30;
  it('should show show -1 for expired timestamp', () => {
    const expiringTimestamp = currentTimeStamp - epochDay;
    expect(timestampExpiresIn(expiringTimestamp, minDay)).toBe(-1);
  });
  it('should show show -1 for expired timestamp', () => {
    const expiringTimestamp = currentTimeStamp - (epochDay * 4);
    expect(timestampExpiresIn(expiringTimestamp, minDay)).toBe(-1);
  });
  it('should should return 1', () => {
    const expiringTimestamp = currentTimeStamp + epochDay;
    expect(timestampExpiresIn(expiringTimestamp, minDay)).toBe(1);
  });
  it('should should return 25', () => {
    const expiringTimestamp = currentTimeStamp + (epochDay * 25);
    expect(timestampExpiresIn(expiringTimestamp, minDay)).toBe(25);
  });
  it('should should return 0', () => {
    const expiringTimestamp = currentTimeStamp + (epochDay * 30);
    expect(timestampExpiresIn(expiringTimestamp, minDay)).toBe(0);
  });
  it('should should return 0', () => {
    const expiringTimestamp = currentTimeStamp + (epochDay * 31);
    expect(timestampExpiresIn(expiringTimestamp, minDay)).toBe(0);
  });
});
