import React from 'react';
import { shallow } from 'enzyme';

import ChatRoomItem from '../../index';
import { chatBoxMessage, chatBoxTypes } from '../../index.stories';

// https://hackernoon.com/oh-snap-snapshots-unit-integration-testing-with-jest-enzyme-13cc18aecb7b
it('Renders component correctly', () => {
  const user = shallow(<ChatRoomItem message={chatBoxMessage} type={chatBoxTypes[0]} />);
  expect(user).toMatchSnapshot();
  const friend = shallow(<ChatRoomItem message={chatBoxMessage} type={chatBoxTypes[1]} />);
  expect(friend).toMatchSnapshot();
});
