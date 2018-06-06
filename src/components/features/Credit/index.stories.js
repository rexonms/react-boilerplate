import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Credit from './index';

const stories = storiesOf('components/features/Credit', module);
const props = {
  // creditTable: {},
  creditRemaining: {
    label: 'Total Credits Remaining',
    amount: '$1,400',
  },
  creditDisclaimer: 'Momo credit can be applied to Momo merchandise, software upgrades and servicing your product. ',
};
stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('Credit', withInfo('Component')(() => <Credit {...props} />));
