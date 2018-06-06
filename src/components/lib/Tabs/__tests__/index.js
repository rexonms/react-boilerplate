import React from 'react';
import { shallow } from 'enzyme';

import Tabs from '../index';
import Styles from '../Tabs.scss';
import { props } from './../index.stories';

describe('Tabs Component', () => {
  let wrapper;
  const importedProps = props;
  importedProps.onChangeHandler = () => {};

  beforeEach(() => {
    wrapper = shallow(<Tabs
      {...importedProps}
    />);
  });

  it('renders with proper className', () => {
    expect(wrapper.exists(Styles.container)).toBe(true);
    expect(wrapper.find(`.${Styles.container}`)).toHaveLength(1);
  });

  // it('container the required prop', () => {
  //   expect(wrapper.exists(props.selectedRadioValue)).toBe(true);
  // });

  // it('container if tab selector is working', () => {
  //   const button = wrapper.find(`.${importedProps.radios[0].value}`);
  //   button.simulate('click');
  //   // verifying default state
  //   expect(wrapper.text()).toEqual(props.buttonLabelOn);
  //   expect(wrapper.find(`.${Styles.bulbOff}`)).toHaveLength(1); // className is changed
  // });
  
  
  //
  // it('checks if toggle button is working properly', () => {
  //   const button = wrapper.find(`.${Styles.button}`);
  //   // verifying default state
  //   expect(wrapper.text()).toEqual(props.buttonLabelOn);
  //
  //   button.simulate('click');
  //   expect(wrapper.text()).toEqual(props.buttonLabelOff); // label text is changed
  //   expect(wrapper.find(`.${Styles.bulbOff}`)).toHaveLength(1); // className is changed
  //
  //   button.simulate('click');
  //   expect(wrapper.text()).toEqual(props.buttonLabelOn); // label text is changed
  //   expect(wrapper.find(`.${Styles.bulbOn}`)).toHaveLength(1); // className is changed
  // });
});

