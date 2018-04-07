import React from 'react';
import renderer from 'react-test-renderer';

import StatefulComponent from '../../index';

it('renders correctly', () => {
  const tree = renderer.create(<StatefulComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
