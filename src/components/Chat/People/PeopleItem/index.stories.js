import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import PeopleItem from './index';

const stories = storiesOf('components/Chat/People/PeopleItem', module);
export const props = {
  conversationId: '100',
  recipientName: 'Mr. Smith',
  recipientEmail: 'mr.smith@gmail.com',
  avatarImageURL: 'http://dummyimage.com/mediumrectangle/222222/eeeeee',
  imageAltText: 'Mr. Smith',
  lastMessage: 'Howdy!',
}

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('PeopleItem', withInfo(`
  A Stateful Component example that toggles the bulb state based on CHAT_BOX_USER click event.
  ~~~js
    <PeopleItem
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/222222/eeeeee',
      recipientName: 'Mr. Smith',
      lastMessage: 'Howdy!',
      recipientEmail: 'mr.smith@gmail.com',
        imageAltText: 'Mr. Smith',
    />
  ~~~
`)(() => (
  <PeopleItem
    {...props}
    onClick={action(this.props.email)}
  />
)));
