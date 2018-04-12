import React from 'react';
import { shallow } from 'enzyme';

import ChatRoomItem from '../../index';
import { props } from '../../index.stories';

// https://hackernoon.com/oh-snap-snapshots-unit-integration-testing-with-jest-enzyme-13cc18aecb7b
it('Renders component correctly', () => {
  const user = shallow(<ChatRoomItem
    message={props.message}
    type={props.chatBoxTypes[0]}
    imageURL={props.imageURL}
    imageAltText={props.imageAltText}
  />);
  expect(user).toMatchSnapshot();
  const friend = shallow(<ChatRoomItem
    message={props.message}
    type={props.chatBoxTypes[1]}
    imageURL={props.imageURL}
    imageAltText={props.imageAltText}
  />);
  expect(friend).toMatchSnapshot();
});
