import React from 'react';
import { shallow } from 'enzyme';

import Title from '../index';
import Styles from '../Title.scss';

describe('Title Component', () => {
  const props = {
    title: 'Momo Eating Contest',
  };
  const wrapper = shallow(<Title {...props} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.title)).toBe(true);
  });
});
