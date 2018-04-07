import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import '@storybook/addon-knobs/register';

import styles from './styles.scss';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator(story => (
  <div className={styles.container}> {/* Storybook styles */}
    {story()}
  </div>
));
configure(loadStories, module);
