import React from 'react';
import { shallow } from 'enzyme';

import MessageList from '../../index';
import { props } from './../../index.stories.hbs'

// https://hackernoon.com/oh-snap-snapshots-unit-integration-testing-with-jest-enzyme-13cc18aecb7b
it('Renders component correctly', () => {
  const component = shallow(<MessageList {...props} />);
  expect(component).toMatchSnapshot();
});
