// import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';

import Test from '../index';
import styles from '../Test.scss';
import { props } from './../index.stories.hbs'

describe('Test Component', () => {
  const wrapper = shallow(<Test {...props} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(styles.container)).toBe(true);
    expect(wrapper.find(`.${styles.container}`)).toHaveLength(1);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.buttonLabelOn)).toBe(true);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.buttonLabelOff)).toBe(true);
  });

  it('checks if toggle button is working properly', () => {
    const button = wrapper.find(`.${styles.button}`);
    // verifying default state
    expect(wrapper.text()).toEqual(props.buttonLabelOn);

    button.simulate('click');
    expect(wrapper.text()).toEqual(props.buttonLabelOff); // label text is changed
    expect(wrapper.find(`.${styles.bulbOff}`)).toHaveLength(1); // className is changed

    button.simulate('click');
    expect(wrapper.text()).toEqual(props.buttonLabelOn);  // label text is changed
    expect(wrapper.find(`.${styles.bulbOn}`)).toHaveLength(1); // className is changed
  });
});

