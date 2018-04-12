import React from 'react';
import { shallow } from 'enzyme';

import ChatRoomList from '../../index';
import { conversationList } from '../../dummyData';
// https://hackernoon.com/oh-snap-snapshots-unit-integration-testing-with-jest-enzyme-13cc18aecb7b

it('Renders component correctly', () => {
  const component = shallow(<ChatRoomList list={conversationList} />);
  expect(component).toMatchSnapshot();
});
