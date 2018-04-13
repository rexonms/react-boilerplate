import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import MessageInput from './index';

const stories = storiesOf('components/Chat/MessageInput', module);
export const props = {
  label: 'message',
  sendMessage: action('Message to Send'),
};

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('MessageInput', withInfo(`
Message Input box gets user input and trigger send message action when clicked Enter
~~~js
  <MessageInput
    label: 'message',
     sendMessage: () => {},
  />)
~~~
`)(() => (<MessageInput {...props} />)));
