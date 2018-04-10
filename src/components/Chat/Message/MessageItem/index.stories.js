import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import MessageItem from './index';

const stories = storiesOf('components/Chat/Message/MessageItem', module);
export const props = {
  avatarImageURL: 'http://dummyimage.com/mediumrectangle/222222/eeeeee',
  recipientName: 'Mr. Smith',
  lastMessage: 'Howdy!',
  email: 'mr.smith@gmail.com',
  imageAltText: 'Mr. Smith',
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
      email: 'mr.smith@gmail.com',
        imageAltText: 'Mr. Smith',
    />
  ~~~
`)(() => {
return (
  <MessageItem
    {...props}
    onClick={action(this.props.email)}
  />
);
}));
