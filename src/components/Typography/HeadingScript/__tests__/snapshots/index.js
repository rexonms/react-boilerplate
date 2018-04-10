import React from 'react';
import { shallow } from 'enzyme';

import HeadingScript from '../../index';

// https://hackernoon.com/oh-snap-snapshots-unit-integration-testing-with-jest-enzyme-13cc18aecb7b
it('Renders component correctly', () => {
  const component = shallow(<HeadingScript name="component" />);
  expect(component).toMatchSnapshot();
});
