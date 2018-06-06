import React from 'react';
import { shallow } from 'enzyme';

import EatingBlock from '../index';
import Styles from '../EatingBlock.scss';

describe('EatingBlock Component', () => {
const props = {
  vehicle: 'Model S',
  count: 1,
};  const wrapper = shallow(<EatingBlock {...props} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.vehicle)).toBe(true);
  });
});
