import React from 'react';
import renderer from 'react-test-renderer';

import Paragraph from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <Paragraph
      label='test text'
      size='small'
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
