import React from 'react';
import renderer from 'react-test-renderer';

import Comp from './../index';

it('renders correctly', () => {
  const tree = renderer.create(<Comp name="component" />).toJSON();
  expect(tree).toMatchSnapshot();
});
