import React from 'react';
import { shallow } from 'enzyme';

import SocialShare from '../index';
import { props } from '../index.stories';
import Styles from '../SocialShare.scss';

describe('SocialShare Component', () => {
  const wrapper = shallow(<SocialShare {...props} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.vehicle)).toBe(true);
  });
});
