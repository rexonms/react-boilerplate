// import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';

import PeopleItem from '../index';
import styles from '../PeopleItem.scss';
import { props } from './../index.stories';

describe('PeopleItem Component', () => {
  const wrapper = shallow(<PeopleItem {...props} onClick={() => {}} />);

  it('renders with proper className', () => {
    expect(wrapper.exists(styles.container)).toBe(true);
    expect(wrapper.exists(styles.avatar)).toBe(true);
    expect(wrapper.exists(styles.details)).toBe(true);
    expect(wrapper.find(`.${styles.container}`)).toHaveLength(1);
  });

  it('container the required prop', () => {
    expect(wrapper.exists(props.avatarImageURL)).toBe(true);
    expect(wrapper.exists(props.recipientName)).toBe(true);
    expect(wrapper.exists(props.lastMessage)).toBe(true);
  });

  it('checks if toggle click button is working', () => {
    const button = wrapper.find(`.${styles.container}`);
    button.simulate('click');
    // expect(window.alert).toBe(props.recipientName);
  });
});

