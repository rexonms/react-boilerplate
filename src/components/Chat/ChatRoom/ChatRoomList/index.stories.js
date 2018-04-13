import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ChatRoomList from './index';
import { conversationList } from './dummyData';

const stories = storiesOf('components/Chat/ChatRoom/ChatRoomList', module);
const styles = {
  width: '500px',
  margin: 'auto',
  background: '#fff',
  padding: '20px',
  border: '1px solid #eee',
};
stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('ChatRoomList', withInfo(`
  Chat Room list displays all the message for the current user. 
  ~~~js
    <ChatRoomList list={conversationList} />)
  ~~~
`)(() => (
  <div style={styles}>
    <ChatRoomList list={conversationList} />
  </div>
)));
