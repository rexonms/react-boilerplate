import React from 'react';
import { shallow } from 'enzyme';

import HeadingScript from '../index';
import styles from '../HeadingScript.scss';

describe('HeadingScript Component', () => {
  const text = 'foo';
  const wrapper = shallow(<HeadingScript text={text} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(text)).toBe(true);
  });
});
