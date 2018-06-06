import React from 'react';
import { shallow } from 'enzyme';

import Home from '../index';
import Styles from '../Home.scss';

describe('Home Component', () => {
const props = {
  vehicle: 'Model S',
  count: 1,
};  const wrapper = shallow(<Home {...props} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.vehicle)).toBe(true);
  });
});
