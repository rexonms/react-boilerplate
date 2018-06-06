import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import EatingBlock from './index';

const stories = storiesOf('components/features/Eating', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('EatingBlock', withInfo(`
  Component
  ~~~js
    <EatingBlock name='EatingBlock' />
  ~~~
`)(() => {
  const vehicles = ['Model S', 'Model 3', 'Model X', 'Roadster 2'];
  const vehicleOptions = select('vehicle', vehicles, vehicles[0]);
  const defaultValue = 5;
  const options = {
    range: true,
    min: 1,
    max: 5,
    step: 1,
  };
  const groupId = 'GROUP-ID1';
  const vehicleCounts = number('count', defaultValue, options, groupId);
  return (
    <EatingBlock
      vehicle={vehicleOptions}
      count={vehicleCounts}
    />
  );
}));