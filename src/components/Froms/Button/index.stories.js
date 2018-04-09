import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Button from './index';

const stories = storiesOf('components/Froms/Button', module);
const nameText = 'Button';

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('Button', withInfo(`
  Component
  ~~~js
    <Button name='Button' />)
  ~~~
`)(() => {
  return (
    <Button
      name={nameText}
    />
  );
}));
