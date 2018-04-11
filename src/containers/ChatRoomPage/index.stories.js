import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ChatRoomPage from './index';

const stories = storiesOf('containers/ChatRoomPage', module);
export const props = {
  buttonLabelOn: 'on',
  buttonLabelOff: 'off',
}


stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('ChatRoomPage', withInfo(`
  A Stateful Component example that toggles the bulb state based on CHAT_BOX_USER click event.
~~~js
<ChatRoomPage
buttonLabelOn="on"
buttonLabelOff="off"
  />)
~~~
`)(() => {
return (
  <ChatRoomPage
   {...props}
  />
);
}));
