// import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';

import MessageInput from '../index';
import Styles from '../MessageInput.scss';
const props = {
  label: 'message',
  sendMessage: e => e,
}

describe('MessageInput Component', () => {
  it('renders with proper className', () => {
    const wrapper = shallow(<MessageInput {...props} />);
    expect(wrapper.exists(Styles.container)).toBe(true);
    expect(wrapper.find(`.${Styles.container}`)).toHaveLength(1);
  });

  it('checks if input box is working properly', () => {
    const wrapper = mount(<MessageInput {...props} />); // Have to use mount
    const input = wrapper.find('input');
    const message = 'Finally!!! '
    input.simulate('change', { target: { value: message } });
    expect(input.instance().value).toEqual(message);
  });

  it('checks upKey is triggered', () => {
    const wrapper = mount(<MessageInput {...props} />); // Have to use mount
    const input = wrapper.find('input');
    const keyCode = 13;
    const doneChange = jest.fn();
    input.simulate('keyUp', { key: keyCode, keyCode, which: keyCode });
    console.log(wrapper.prop('sendMessage'))
    expect(doneChange).toBeCalled();
  });
});
