import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import HeadingScript from './index';

const stories = storiesOf('components/Typography/HeadingScript', module);
const nameText = 'HeadingScript';

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('HeadingScript', withInfo(`
  Component
  ~~~js
    <HeadingScript text='HeadingScript' />)
  ~~~
`)(() => {
  return (
    <HeadingScript
      text='Heading Script'
    />
  );
}));
