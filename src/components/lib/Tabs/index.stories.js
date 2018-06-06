import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Tabs from './index';

const stories = storiesOf('components/lib/Tabs', module);
export const props = {
  selectedRadioValue: 'tabB',
  radios: [
    { id: 1, label: 'Tab A', value: 'tabA' },
    { id: 2, label: 'Tab B', value: 'tabB' },
    { id: 3, label: 'Tab C', value: 'tabAC' },
  ],
};

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('Tabs', withInfo(`
  A Stateful Tab component that dispatches props on select
~~~js
    <Tabs
        selectedRadioValue="tabB",
        radios: [
            { id: 1, label: 'Tab A', value: 'tabA' },
            { id: 2, label: 'Tab B', value: 'tabB' },
        ],
        onChangeHandler: {}
    />
~~~
`)(() => (
  <Tabs
    {...props}
    onChangeHandler={action('Selected Tab')}
  />
)));

