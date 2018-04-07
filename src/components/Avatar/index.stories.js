import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Avatar from './index';

const stories = storiesOf('components/Avatar', module);
const imageUrl = 'https://place-hold.it/100'
stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('Avatar', withInfo(`
  Component
  ~~~js
    <Avatar imageURL=imageUrl />)
  ~~~
`)(() => {
  return (
    <Avatar
      imageURL={imageUrl}
    />
  );
}));
