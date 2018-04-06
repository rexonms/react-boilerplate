import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import IconAward from './index';
import styles from './../../../../.storybook/styles.scss';
import awardsTypes from './awardTypes';

const stories = storiesOf('Components/Icon', module);
stories.addDecorator(withKnobs);

const sizes = ['', 'small', 'large'];
const types = awardsTypes;

// Knobs as dynamic variables.
stories.addDecorator(story => (
  <div className={`${styles.backgroundBlack} ${styles.centered}`}>
    {story()}
  </div>
));

stories.add('Awards', withInfo(`
  List of all award icons. 
  ~~~js
  <IconAward size={sizeOptions} type={nameOptions} />);
  ~~~
`)(() => {
  const sizeOptions = select('size', sizes, '');
  const typeOptions = select('type', types, types[0]);
  return (
    <IconAward size={sizeOptions} type={typeOptions} />);
}));

