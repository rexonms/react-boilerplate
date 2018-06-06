import React from 'react';
import { shallow } from 'enzyme';

import ContestDetails from '../index';
import Styles from '../ContestDetails.scss';

describe('ContestDetails Component', () => {
const props = {
  vehicle: 'Model S',
  count: 1,
};  const wrapper = shallow(<ContestDetails {...props} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.vehicle)).toBe(true);
  });
});
