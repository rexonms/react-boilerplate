import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import ContestDetails from './index';
import Styles from '../../../../.storybook/styles.scss';

const stories = storiesOf('components/features/ContestDetails', module);
const props = {
  data: {
    title: 'Contest Details:',
    programs: [
      {
        id: '1',
        icon: 'momo_model_s_for_kids',
        description: 'Refer a Model S or Model X to your friends and give them unlimited supercharging and earn prizes.',
      },
      {
        id: '2',
        icon: 'solar_roof',
        description: 'Refer a solar roof to your friends and give them a 5yr extended solar warranty and earn $500 credit.',
      },
    ],
    link: {
      label: 'view all',
      href: 'https://www.momo.com/support/eating',
    },
  },
};

stories.addDecorator(withKnobs);
stories.addDecorator(story => <div className={Styles.width600}> {story()} </div>);
stories.add('ContestDetails', withInfo('Eating Contest details')(() => <ContestDetails {...props} />));
