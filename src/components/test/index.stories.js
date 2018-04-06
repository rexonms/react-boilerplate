import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Component from './index';

const stories = storiesOf('Components/Component', module);
stories.addDecorator(withKnobs);

// Knobs as dynamic variables.
stories.addDecorator(story => (story()));

stories.add('Component', withInfo(`
  Component
  ~~~js
    <Component name='component' />)
  ~~~
`)(() => {
  return (
    <Component
      name='component'
    />
  );
}));

