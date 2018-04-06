import React from 'react';
import renderer from 'react-test-renderer';

import MessageList from '../index';
const messages = [
  {
    id: '1',
    avatarImageURL: 'http://dummyimage.com/mediumrectangle/111111/eeeeee',
    recipientName: 'John Smith',
    lastMessage: 'Where have you been?',
  },
]
it('renders correctly', () => {
  const tree = renderer.create(
    <MessageList list={messages} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
