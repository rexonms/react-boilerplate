import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Test from './index';

const stories = storiesOf('components/Test', module);
export const props = {
  buttonLabelOn: 'on',
  buttonLabelOff:'off',
}


stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('Test', withInfo(`
  A Stateful Component example that toggles the bulb state based on user click event.
~~~js
<Test
buttonLabelOn="on"
buttonLabelOff="off"
  />)
~~~
`)(() => {
return (
  <Test
   {...props}
  />
);
}));
