import React from 'react';
import { shallow } from 'enzyme';

import Album from '../index';
import styles from '../Album.scss';

describe('Album Component', () => {
  const name = 'foo';
  const wrapper = shallow(<Album name={name} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(name)).toBe(true);
  });
});
