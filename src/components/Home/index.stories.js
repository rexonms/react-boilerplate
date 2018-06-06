import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Home from './index';

const stories = storiesOf('Home/Home', module);

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('Home', withInfo(`
  Component
  ~~~js
    <Home name='Home' />
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
    <Home
      vehicle={vehicleOptions}
      count={vehicleCounts}
    />
  );
}));