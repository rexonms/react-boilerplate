import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Button from './index';

const stories = storiesOf('Components/Button', module);
stories.addDecorator(withKnobs);

const sizes = ['', 'small', 'large'];

// Knobs as dynamic variables.
stories.add('Standard', withInfo(`
  A Standard button comes in different sizes The sizes can be null, 'small' or 'large'.
  ~~~js
  <Button label={label} size={sizeOptions} onClick/>);
  ~~~
`)(() => {
  const sizeOptions = select('size', sizes, '');
  const label = text('label', 'button');
  return (
    <Button label={label} size={sizeOptions} onClickHandler={null} />
  );
}));

