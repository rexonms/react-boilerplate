// import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';

import ScrollingList from '../index';
import Styles from '../ScrollingList.scss';
import { props } from './../index.stories';

describe('ScrollingList Component', () => {
  const wrapper = shallow(<ScrollingList {...props} />);

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

  it('checks if toggle button is working properly', () => {
    const button = wrapper.find(`.${Styles.button}`);
    // verifying default state
    expect(wrapper.text()).toEqual(props.buttonLabelOn);

    button.simulate('click');
    expect(wrapper.text()).toEqual(props.buttonLabelOff); // label text is changed
    expect(wrapper.find(`.${Styles.bulbOff}`)).toHaveLength(1); // className is changed

    button.simulate('click');
    expect(wrapper.text()).toEqual(props.buttonLabelOn); // label text is changed
    expect(wrapper.find(`.${Styles.bulbOn}`)).toHaveLength(1); // className is changed
  });
});

