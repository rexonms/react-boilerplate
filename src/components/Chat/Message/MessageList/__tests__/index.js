// import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';

import MessageList from '../index';
import Styles from '../MessageList.scss';
import { props } from './../index.stories';

describe('MessageList Component', () => {
  const wrapper = shallow(<MessageList {...props} onClick={() => {}} />);

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

