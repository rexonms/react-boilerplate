import React from 'react';
import { shallow } from 'enzyme';

import ChatRoomItem from '../index';
import Styles from '../ChatRoomItem.scss';
import { props } from '../index.stories';

describe('ChatRoomItem Component shows message', () => {
  const wrapper = shallow(<ChatRoomItem
    message={props.message}
    type={props.chatBoxTypes[0]}
    imageURL={props.imageURL}
    imageAltText={props.imageAltText}
  />);
  it('container the required prop', () => {
    expect(wrapper.exists(props.message)).toBe(true);
  });
});

describe('ChatRoomItem Component switches className', () => {
  const friend = shallow(<ChatRoomItem
    message={props.message}
    type={props.chatBoxTypes[0]}
    imageURL={props.imageURL}
    imageAltText={props.imageAltText}
  />);
  const user = shallow(<ChatRoomItem
    message={props.message}
    type={props.chatBoxTypes[1]}
    imageURL={props.imageURL}
    imageAltText={props.imageAltText}
  />);
  it('container the required prop', () => {
    expect(friend.exists(Styles.friend)).toBe(true);
  });
  it('container the required prop', () => {
    expect(user.exists(Styles.user)).toBe(true);
  });
});
