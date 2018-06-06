import React from 'react';
import { shallow } from 'enzyme';

import TogglerArrow from '../index';
import Styles from '../TogglerArrow.scss';

describe('TogglerArrow Component', () => {
const props = {
  vehicle: 'Model S',
  count: 1,
};  const wrapper = shallow(<TogglerArrow {...props} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.vehicle)).toBe(true);
  });
});
