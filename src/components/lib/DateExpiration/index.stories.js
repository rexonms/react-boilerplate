import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import DateExpiration, { epochDay, currentTimeStamp } from './index';

const stories = storiesOf('components/lib/DateExpiration', module);
export const props = {
  timestamp: 1527633993,
  minDay: 30,
  expired: '(expired)',
  expiresIn: {
    singular: '(expires in #NUM# day)',
    plural: '(expires in #NUM# days)',
  },
};

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('DateExpiration', withInfo(`
  Display a message if the epoch date will expire with in n days or expired. If the date is > n days it will return null
  ~~~js
    <DateExpiration name='DateExpiration' />
  ~~~
`)(() => {
  const label = 'timestamp';
  const defaultValue = currentTimeStamp + (epochDay * 5);
  const options = {
    range: true,
    min: currentTimeStamp - epochDay,
    max: currentTimeStamp + (epochDay * 40),
    step: epochDay,
  };
  const groupId = 'GROUP-ID1';
  const timestampOptions = number(label, defaultValue, options, groupId);

  return (
    <DateExpiration
      timestamp={timestampOptions}
      expired={props.expired}
      expiresIn={props.expiresIn}
    />);
}));
