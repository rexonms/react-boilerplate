import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Comp from './index';

const stories = storiesOf('Components/Icon', module);
stories.addDecorator(withKnobs);

// Knobs as dynamic variables.
stories.addDecorator(story => (story()));

stories.add('Comp', withInfo(`
  Component
  ~~~js
    <Comp name='component' />)
  ~~~
`)(() => {
  return (
    <Comp name='component' />);
}));

