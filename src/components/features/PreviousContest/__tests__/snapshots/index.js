import React from 'react';
import { shallow } from 'enzyme';

import EatingBlock from '../../index';

// https://hackernoon.com/oh-snap-snapshots-unit-integration-testing-with-jest-enzyme-13cc18aecb7b
it('Renders component correctly', () => {
  const props = {
    vehicle: 'Model S',
    count: 1,
  };
  const component = shallow(<EatingBlock {...props} />);
  expect(component).toMatchSnapshot();
});
