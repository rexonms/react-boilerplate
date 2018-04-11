import React from 'react';
import { shallow } from 'enzyme';

import ChatRoomItem from '../index';
import Styles from '../ChatRoomItem.scss';
import { chatBoxTypes, chatBoxMessage } from '../index.stories';

describe('ChatRoomItem Component shows message', () => {
  const wrapper = shallow(<ChatRoomItem message={chatBoxMessage} type={chatBoxTypes[0]} />);
  it('container the required prop', () => {
    expect(wrapper.exists(chatBoxMessage)).toBe(true);
  });
});

describe('ChatRoomItem Component switches className', () => {
  const friend = shallow(<ChatRoomItem message={chatBoxMessage} type={chatBoxTypes[0]} />);
  const user = shallow(<ChatRoomItem message={chatBoxMessage} type={chatBoxTypes[1]} />);
  it('container the required prop', () => {
    expect(friend.exists(Styles.friend)).toBe(true);
  });
  it('container the required prop', () => {
    expect(user.exists(Styles.user)).toBe(true);
  });
});
