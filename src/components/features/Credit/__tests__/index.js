import React from 'react';
import { shallow } from 'enzyme';

import Credit from '../index';
import Styles from '../Credit.scss';

describe('Credit Component', () => {
  const props = {};
   const wrapper = shallow(<Credit {...props} />);
  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.vehicle)).toBe(true);
  });
});
