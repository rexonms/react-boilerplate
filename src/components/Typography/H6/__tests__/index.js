import React from 'react';
import renderer from 'react-test-renderer';

import H6 from './../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <H6 labelText='heading'/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
