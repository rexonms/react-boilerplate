import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from './../index';

it('renders correctly', () => {
  const tree = renderer.create(<Avatar imageURL='https://place-hold.it/100' />).toJSON();
  expect(tree).toMatchSnapshot();
});
