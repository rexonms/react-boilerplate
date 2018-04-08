import React from 'react';
import { shallow } from 'enzyme';

import Avatar from '../index';
import styles from '../Avatar.scss';

describe('Avatar Component', () => {
  const imageURL='https://place-hold.it/100';
  const wrapper = shallow(<Avatar imageURL={imageURL} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(imageURL)).toBe(true);
  });
});

