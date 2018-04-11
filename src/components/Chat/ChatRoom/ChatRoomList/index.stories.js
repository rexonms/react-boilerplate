import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ChatRoomList from './index';
import { conversationList } from './dummyData';

const stories = storiesOf('components/Chat/ChatRoom/ChatRoomList', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('ChatRoomList', withInfo(`
  Component
  ~~~js
    <ChatRoomList name='ChatRoomList' />)
  ~~~
`)(() => {
  return (
    <ChatRoomList
      list={conversationList}
    />
  );
}));
