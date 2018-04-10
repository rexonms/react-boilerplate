import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import MessageItemPage from './index';

const stories = storiesOf('containers/MessageItemPage', module);
export const props = {
  buttonLabelOn: 'on',
  buttonLabelOff:'off',
}


stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('MessageItemPage', withInfo(`
  A Stateful Component example that toggles the bulb state based on user click event.
~~~js
<MessageItemPage
buttonLabelOn="on"
buttonLabelOff="off"
  />)
~~~
`)(() => {
return (
  <MessageItemPage
   {...props}
  />
);
}));
