import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import TextInput from './index';

const stories = storiesOf('Components/TextInput', module);
stories.addDecorator(withKnobs);

// Knobs as dynamic variables.
stories.addDecorator(story => (story()));

stories.add('TextInput', withInfo(`
  Text fields enable the user to interact with and input data. A single line field is used when the input anticipated by the user is a single line of text as opposed to a paragraph.
  ~~~js
    <TextInput id="input-story" labelText="standard input"/>
  ~~~
`)(() => {
  return (
    <TextInput id="input-story" labelText="standard input"/>
  )}));

