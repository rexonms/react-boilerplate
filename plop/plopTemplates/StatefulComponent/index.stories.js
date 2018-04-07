import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import StatefulComponent from './index';

const stories = storiesOf('Components/StatefulComponent', module);
stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('StatefulComponent', withInfo(`
  StatefulComponent
  ~~~js
   <StatefulComponent
      buttonText={buttonText}
      beforeText="hello"
      afterText="clicked"
    />
  ~~~
`)(() => {
  const buttonText = 'Click Me';
  return (
    <StatefulComponent
      buttonText={buttonText}
      beforeText="hello"
      afterText="clicked"
    />
  );
}));
