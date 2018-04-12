import React from 'react';
import { shallow } from 'enzyme';

import MessageInput from '../../index';
import { props } from './../../index.stories';

// https://hackernoon.com/oh-snap-snapshots-unit-integration-testing-with-jest-enzyme-13cc18aecb7b
it('Renders component correctly', () => {
  const component = shallow(<MessageInput {...props} />);
  expect(component).toMatchSnapshot();
});
