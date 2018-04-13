import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ChatRoomItem from './index';
import { CHAT_BOX_FRIEND, CHAT_BOX_USER } from './Const';

const stories = storiesOf('components/Chat/ChatRoom/ChatRoomItem', module);
const styles = {
  width: '500px',
  background: '#fff',
  border: '1px solid #ccc',
  padding: '20px',
};

export const props = {
  chatBoxTypes: [CHAT_BOX_FRIEND, CHAT_BOX_USER],
  message: 'How you doing?',
  imageURL: 'https://place-hold.it/100',
  imageAltText: 'Alt text of image',
}

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('ChatRoomItem', withInfo(`
  Component
  ~~~js
    <ChatRoomItem {...props}  />)
  ~~~
`)(() => {
  const type = select('type', props.chatBoxTypes, props.chatBoxTypes[0]);
  return (
    <div style={styles}> <ChatRoomItem {...props} type={type} /> </div>
  );
}));
