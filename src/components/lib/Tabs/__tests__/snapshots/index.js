import React from 'react';
import { shallow } from 'enzyme';

import Tabs from '../../index';
import { props } from './../../index.stories';

// https://hackernoon.com/oh-snap-snapshots-unit-integration-testing-with-jest-enzyme-13cc18aecb7b
it('Renders component correctly', () => {
  const importedProps = props;
  importedProps.onChangeHandler = () => {};
  const component = shallow(<Tabs {...importedProps} />);
  expect(component).toMatchSnapshot();
});
