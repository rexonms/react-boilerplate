import React from 'react';
import renderer from 'react-test-renderer';

import DateExpiration from '../../index';
import { props } from './../../index.stories';

describe('DateExpiration Component', () => {
  it('Snapshot matches', () => {
    const tree = renderer.create(<DateExpiration {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});