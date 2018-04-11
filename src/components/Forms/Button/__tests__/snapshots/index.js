import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../index';

// https://hackernoon.com/oh-snap-snapshots-unit-integration-testing-with-jest-enzyme-13cc18aecb7b
it('Renders component correctly', () => {
  const component = shallow(<Button label="snap" onClick={() => {}} />);
  expect(component).toMatchSnapshot();
});
