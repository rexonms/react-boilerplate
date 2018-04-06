import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Paragraph from './index';

const stories = storiesOf('Paragraph', module);
stories.addDecorator(withKnobs);

const ipsumA = 'Cupcake ipsum dolor sit amet icing cupcake jelly-o liquorice. Macaroon croissant pudding tootsie roll jelly-o I love marshmallow I love. Jelly beans I love dragée gingerbread apple pie gummies chocolate chocolate cake.';
const ipsumB = 'I love pudding carrot cake tootsie roll biscuit sweet. Cheesecake I love I love cheesecake. Tootsie roll croissant bear claw soufflé toffee bonbon marshmallow biscuit. Apple pie ice cream jelly beans tiramisu sweet pastry. Dragée powder halvah I love liquorice I love oat cake I love sugar plum. Soufflé gummies I love biscuit. Marzipan I love gingerbread lollipop. Apple pie wafer tart. Topping macaroon croissant caramels muffin I love. Bonbon danish ice cream oat cake gummi bears chocolate bar. I love caramels tiramisu lollipop marzipan. Bear claw apple pie biscuit biscuit. Dragée cheesecake chupa chups cupcake tart carrot cake tart cupcake I love. Sweet I love marzipan I love.'
const sizes = ['', 'small', 'large'];
const colors = ['', 'light', 'dark'];

// Knobs as dynamic variables.
stories.add('standard', withInfo(`
  The paragraph component takes size and color props.
  ~~~js
  <Paragraph label={label} size={sizeOptions} color={colorOptions} />);
  ~~~
`)(() => {
  const sizeOptions = select('size', sizes, '');
  const colorOptions = select('color', colors, '');
  return (
    <div>
      <Paragraph label={ipsumA} size={sizeOptions} color={colorOptions} />
      <Paragraph label={ipsumB} size={sizeOptions} color={colorOptions} />
    </div>
  );

}));

