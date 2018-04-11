import React from 'react';
import { shallow } from 'enzyme';

import ChatRoomList from '../index';
import Styles from '../ChatRoomList.scss';

describe('ChatRoomList Component', () => {
  const name = 'foo';
  const wrapper = shallow(<ChatRoomList name={name} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(name)).toBe(true);
  });
});
