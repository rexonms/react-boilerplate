import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from './../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <TextInput
      labelText="test table"
      id="unique id"
      onChangeHandler={() => {}}
    />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
