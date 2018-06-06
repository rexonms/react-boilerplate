import React from 'react';
import { shallow } from 'enzyme';

import LoadingBars from '../index';
import styles from '../LoadingBars.scss';

describe('LoadingBars Component', () => {
  const wrapper = shallow(<LoadingBars/>);

  it('renders with proper className', () => {
    expect(wrapper.exists(styles.spinner)).toBe(true);
  });
});
