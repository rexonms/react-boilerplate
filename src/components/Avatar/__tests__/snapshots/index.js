import React from 'react';
import { shallow } from 'enzyme';

import Avatar from '../../index';

// https://hackernoon.com/oh-snap-snapshots-unit-integration-testing-with-jest-enzyme-13cc18aecb7b
it('Renders component correctly', () => {
  const component = shallow(<Avatar imageURL="https://place-hold.it/100" />);
  expect(component).toMatchSnapshot();
});
