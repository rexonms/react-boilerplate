import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';
import styles from '../Button.scss';

describe('Button Component', () => {
  const name = 'foo';
  const wrapper = shallow(<Button name={name} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(name)).toBe(true);
  });
});
