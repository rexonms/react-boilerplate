import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import InputEmail from './index';

const stories = storiesOf('components/Forms/Input', module);
stories.addDecorator(withKnobs);

// Knobs as dynamic variables.
stories.addDecorator(story => story());

stories.add('Email', withInfo(`
  Email input box that validates input value onBlur.
  ~~~js
    <InputEmail
      label="Email Input"
      value="test@test.com"
      errorMessage="Please check your email address"    
  />)));
  ~~~
`)(() => {
  const defaultLabel = text('label', 'Email Input')
  const defaultErrorMessage = text('errorMessage', 'Please check your email address')

  return (
    <InputEmail
      label={defaultLabel}
      value="test@test.com"
      errorMessage={defaultErrorMessage}
    />
  );
}));

