import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import MessageList from './index';

const stories = storiesOf('components/Chat/Message/MessageList', module);
export const props = {
  list: [
    {
      id: '1',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/111111/eeeeee',
      imageAltText: 'John Smith',
      recipientName: 'John Smith',
      lastMessage: 'Where have you been?',
      email: 'john.smith@gmail.com',
    },
    {
      id: '2',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/333333/eeeeee',
      imageAltText: 'Jenny Smith',
      recipientName: 'Jenny',
      lastMessage: 'And then there this time when I was thing of lots of stuff. A single line field is used when the input anticipated by the CHAT_BOX_USER is a single line of text as opposed to a paragraph.',
      email: 'Jenny.smith@gmail.com',
    },
    {
      id: '3',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/cccccc/eeeeee',
      imageAltText: 'Jhonothan Smith',
      recipientName: 'Mr. Jhonothan Goldsmith',
      lastMessage: 'yt',
      email: 'Jhonothan.smith@gmail.com',
    },
    {
      id: '4',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/aaaaaa/eeeeee',
      imageAltText: '',
      recipientName: '',
      lastMessage: 'hola',
      email: 'smith@gmail.com',
    },
  ],
};


stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('MessageList', withInfo(`
  A Stateful Component example that toggles the bulb state based on CHAT_BOX_USER click event.
~~~js
~~~
`)(() => {
return (
  <MessageList
   list={props.list}
   onClick={action(this.props.email)}
  />
);
}));
