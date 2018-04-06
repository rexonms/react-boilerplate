import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Avatar from './index';

const stories = storiesOf('Components/Avatar', module);
stories.addDecorator(withKnobs);

// Knobs as dynamic variables.
stories.addDecorator(story => (story()));

stories.add('Avatar', withInfo(`
  The avatar of the user
  ~~~js
    <Avatar imageURL={imageURL} />)
  ~~~
`)(() => {
  return (
    <Avatar imageURL='https://place-hold.it/100' />);
}));

