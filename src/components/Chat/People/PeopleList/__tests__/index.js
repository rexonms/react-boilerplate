// import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';

import PeopleList from '../index';
import Styles from '../PeopleList.scss';
import { props } from './../index.stories';

describe('PeopleList Component', () => {
  const wrapper = shallow(<PeopleList {...props} onClick={() => {}} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
    expect(wrapper.find(`.${Styles.container}`)).toHaveLength(1);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.buttonLabelOn)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.buttonLabelOff)).toBe(true);
  });
});

