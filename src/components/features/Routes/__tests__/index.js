import React from 'react';
import { shallow } from 'enzyme';

import Routes from '../index';
import Styles from '../Routes.scss';

describe('Routes Component', () => {
const props = {
  vehicle: 'Model S',
  count: 1,
};  const wrapper = shallow(<Routes {...props} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.vehicle)).toBe(true);
  });
});
