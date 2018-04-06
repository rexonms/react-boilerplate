import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import MessageItem from './index';

const stories = storiesOf('Components/Chat/MessageItem', module);
stories.addDecorator(withKnobs);

// Knobs as dynamic variables.
stories.addDecorator(story => (story()));

stories.add('Standard', withInfo(`
  Message items are the blocks that is displayed in message list. 
  ~~~js
    <MessageItem
      avatarImageURL="avatarImageURL"
      recipientName="recipientName"
      lastMessage="lastMessage"
    />  ~~~
`)(() => {
  return (
    <MessageItem
      avatarImageURL="http://dummyimage.com/mediumrectangle/222222/eeeeee"
      recipientName="John Smith"
      lastMessage="Howdy! my little friend. This has been "
    />
  )
}));

