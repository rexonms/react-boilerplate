import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Heading6 from './index';

const stories = storiesOf('Components/Typography/H6', module);
stories.addDecorator(withKnobs);

// Knobs as dynamic variables.
stories.addDecorator(story => (story()));

stories.add('default', withInfo(`
  Heading 
  ~~~jsu
    <Heading6 labelText='Heading 6' />);
  ~~~
`)(() => {
  return (
    <Heading6 labelText='Heading 6' />);
}));

