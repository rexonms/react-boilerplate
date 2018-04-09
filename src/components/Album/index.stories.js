import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Album from './index';

const stories = storiesOf('components/Album', module);
const nameText = 'Album';

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('Album', withInfo(`
  Component
  ~~~js
    <Album name='Album' />)
  ~~~
`)(() => {
  return (
    <Album
      name={nameText}
    />
  );
}));
