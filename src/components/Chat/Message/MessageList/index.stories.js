import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import MessageList from './index';

const stories = storiesOf('components/Chat/Message/MessageList', module);
export const props = {
  list: [
    {
      id: '1',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/111111/eeeeee',
      recipientName: 'John Smith',
      lastMessage: 'Where have you been?',
    },
    {
      id: '2',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/333333/eeeeee',
      recipientName: 'Jenny',
      lastMessage: 'And then there this time when I was thing of lots of stuff. A single line field is used when the input anticipated by the user is a single line of text as opposed to a paragraph.',
    },
    {
      id: '3',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/cccccc/eeeeee',
      recipientName: 'Mr. Jhonothan Goldsmith',
      lastMessage: 'yt',
    },
    {
      id: '4',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/aaaaaa/eeeeee',
      recipientName: '',
      lastMessage: 'hola',
    },
  ],
};


stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('MessageList', withInfo(`
  A Stateful Component example that toggles the bulb state based on user click event.
~~~js
~~~
`)(() => {
return (
  <MessageList
   list={props.list}
  />
);
}));
