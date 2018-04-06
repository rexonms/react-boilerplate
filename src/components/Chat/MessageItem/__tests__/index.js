import React from 'react';
import renderer from 'react-test-renderer';

import MessageItem from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <MessageItem
      avatarImageURL='http://dummyimage.com/mediumrectangle/222222/eeeeee'
      recipientName='John Doe'
      lastMessage='it has been a while'
    />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
