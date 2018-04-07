import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import StatefulComponent from './index';

const stories = storiesOf('components/StatefulComponent', module);
const buttonLabelOn = 'on';
const buttonLabelOff = 'off';

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('StatefulComponent', withInfo(`
  A Stateful Component example that toggles the bulb state based on user click event.
  ~~~js
    <StatefulComponent
      buttonLabelOn="on"
      buttonLabelOff="off"
    />)
  ~~~
`)(() => {
  return (
    <StatefulComponent
      buttonLabelOn="on"
      buttonLabelOff="off"
    />
  );
}));
