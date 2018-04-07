import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import MessageItem from './index';

const stories = storiesOf('components/Chat/Message/MessageItem', module);
const props = {
  avatarImageURL: 'http://dummyimage.com/mediumrectangle/222222/eeeeee',
  recipientName: 'Mr. Smith',
  lastMessage: 'Howdy!',
}

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('MessageItem', withInfo(`
  A Stateful Component example that toggles the bulb state based on user click event.
  ~~~js
    <MessageItem
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/222222/eeeeee',
      recipientName: 'Mr. Smith',
      lastMessage: 'Howdy!',
    />
  ~~~
`)(() => {
return (
  <MessageItem
    {...props}
  />
);
}));
