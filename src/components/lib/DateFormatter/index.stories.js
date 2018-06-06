import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import DateFormatter from './index';

const stories = storiesOf('components/lib/DateFormatter', module);
const props = {
  timestamp: 1527633993,
  country: 'US',
};
const countries = ['US', 'GB', 'CA'];
stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('DateFormatter', withInfo(`
  Formats epoch timestamp to date based on country code
  ~~~js
    <DateFormatter timestamp={1527633993} country="US" />
  ~~~
`)(() => {
  const countryOptions = select('country', countries, countries[0]);
  return <DateFormatter timestamp={props.timestamp} country={countryOptions} />;
}));
