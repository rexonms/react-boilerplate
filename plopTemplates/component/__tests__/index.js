import React from 'react';
import renderer from 'react-test-renderer';

import Component from './../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <Component
      name="component"
    />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
