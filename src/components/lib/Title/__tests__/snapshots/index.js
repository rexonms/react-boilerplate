import React from 'react';
import { shallow } from 'enzyme';

import Title from '../../index';

it('Renders component correctly', () => {
  const props = {
    title: 'Momo Eating Contest',
  };
  const component = shallow(<Title {...props} />);
  expect(component).toMatchSnapshot();
});
