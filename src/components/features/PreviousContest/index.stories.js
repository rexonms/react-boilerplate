import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import PreviousContest from './index';

const stories = storiesOf('components/features/PreviousContest', module);
const props = {
  title: 'Previous Contest',
  expanded: false,
}
stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('EatingBlock', withInfo('Previous Eating Contest')(() => {
  return (
    <PreviousContest {...props} />
  );
}));