import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import SocialShare from './index';

const stories = storiesOf('components/features/SocialShare', module);
export const props = {
  title: 'My Eating Link',
  eatingLink: 'http://ts.la/marcus8240',
  twitter: 'checkout out my eating link: http://ts.la/marcus8240',
  email: {
    subject: 'Howdy',
    body: 'Let\'s catch up sometime soon! ',
  },
};

stories.addDecorator(withKnobs);
stories.addDecorator(story => (story()));
stories.add('SocialShare', withInfo('List of social/shareable components')(() => (<SocialShare {...props} />)));
