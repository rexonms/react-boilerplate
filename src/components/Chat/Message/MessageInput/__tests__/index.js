import React from 'react';
import { shallow, mount } from 'enzyme';

import MessageInput from '../index';
import Styles from '../MessageInput.scss';

const props = {
  label: 'message',
  sendMessage: e => e,
};

describe('MessageInput Component', () => {
  it('renders with proper className', () => {
    const wrapper = shallow(<MessageInput {...props} />);
    expect(wrapper.exists(Styles.container)).toBe(true);
    expect(wrapper.find(`.${Styles.container}`)).toHaveLength(1);
  });
  it('checks if input box is working properly', () => {
    const wrapper = mount(<MessageInput {...props} />); // Have to use mount
    const input = wrapper.find('input');
    const message = 'Finally!!!';
    input.simulate('change', { target: { value: message } });
    expect(input.instance().value).toEqual(message);
  });
  it('checks upKey triggers onKeyUpHandler', () => {
    const keyCode = 13;
    const wrapper = mount(<MessageInput label="foo" sendMessage={() => {}} />); // Have to use mount
    const spy = jest.spyOn(wrapper.instance(), 'onKeyUpHandler');
    const input = wrapper.find('input');
    input.simulate('keyUp', { key: keyCode, keyCode, which: keyCode });
    expect(spy).toHaveBeenCalled();
  });
  it('checks enter sendMessage props', () => {
    const keyCode = 13;
    const message = 'hello!';
    const doneChange = jest.fn();
    const wrapper = mount(<MessageInput label="foo" sendMessage={doneChange} />); // Have to use mount
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: message } });
    input.simulate('keyUp', { key: keyCode, keyCode, which: keyCode });
    expect(doneChange).toBeCalledWith(message);
  });
});
