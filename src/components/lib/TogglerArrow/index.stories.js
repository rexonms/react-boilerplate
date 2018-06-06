import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions/';
import { withInfo } from '@storybook/addon-info';

import TogglerArrow from './index';

const stories = storiesOf('components/lib/TogglerArrow', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('TogglerArrow', withInfo('Arrow that toggles when clicked')(() => {
  const label = 'expanded';
  const defaultValue = true;
  const groupId = 'GROUP-ID1';
  const value = boolean(label, defaultValue, groupId);
  return <TogglerArrow onClickHandler={action('clicked')} expanded={value} />;
}));
