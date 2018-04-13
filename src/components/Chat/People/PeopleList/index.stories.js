import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import PeopleList from './index';

const stories = storiesOf('components/Chat/People/PeopleList', module);
export const props = {
  list: [
    {
      id: '1',
      conversationId: '100',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/111111/eeeeee',
      imageAltText: 'John Smith',
      recipientName: 'John Smith',
      lastMessage: 'Where have you been?',
      recipientEmail: 'john.smith@gmail.com',
    },
    {
      id: '2',
      conversationId: '101',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/333333/eeeeee',
      imageAltText: 'Jenny Smith',
      recipientName: 'Jenny',
      lastMessage: 'And then there this time when I was thing of lots of stuff. A single line field is used when the input anticipated by the CHAT_BOX_USER is a single line of text as opposed to a paragraph.',
      recipientEmail: 'Jenny.smith@gmail.com',
    },
    {
      id: '3',
      conversationId: '102',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/cccccc/eeeeee',
      imageAltText: 'Jhonothan Smith',
      recipientName: 'Mr. Jhonothan Goldsmith',
      lastMessage: 'yt',
      recipientEmail: 'Jhonothan.smith@gmail.com',
    },
    {
      id: '4',
      conversationId: '103',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/aaaaaa/eeeeee',
      imageAltText: '',
      recipientName: '',
      lastMessage: 'hola',
      recipientEmail: 'smith@gmail.com',
    },
  ],
};


stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('PeopleList', withInfo(`
  A Stateful Component example that toggles the bulb state based on CHAT_BOX_USER click event.
~~~js
~~~
`)(() => {
return (
  <PeopleList
   list={props.list}
   onClick={action(this.props.recipientEmail)}
  />
);
}));
