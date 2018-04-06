import React from 'react';
import renderer from 'react-test-renderer';

import IconAward from './../index';
import awardsTypes from '../awardTypes';

it('renders correctly', () => {
  const tree = renderer.create(<IconAward size="small" type={awardsTypes[0]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
