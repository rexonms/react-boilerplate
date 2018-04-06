import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Input from './index';

const stories = storiesOf('Components/Forms/Input', module);

stories.addDecorator(withKnobs);

// Knobs as dynamic variables.
stories.addDecorator(story => story());

stories.add('Standard', withInfo(`
  Standard Input Box
  ~~~js
  <Input label="Standard Input" />
  ~~~
`)(() => <Input label="Standard Input" />));

