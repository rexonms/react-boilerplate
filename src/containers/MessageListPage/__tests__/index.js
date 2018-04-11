import React from 'react';
import { shallow } from 'enzyme';

import { MessageListPage } from './../index';
import Styles from '../MessageListPage.scss';

const props = {
  list: [
    {
      id: '1',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/111111/eeeeee',
      imageAltText: 'John Smith',
      recipientName: 'John Smith',
      lastMessage: 'Where have you been?',
      email: 'john.smith@gmail.com',
    },
    {
      id: '2',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/333333/eeeeee',
      imageAltText: 'Jenny Smith',
      recipientName: 'Jenny',
      lastMessage: 'And then there this time when I was thing of lots of stuff. A single line field is used when the input anticipated by the CHAT_BOX_USER is a single line of text as opposed to a paragraph.',
      email: 'Jenny.smith@gmail.com',
    },
    {
      id: '3',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/cccccc/eeeeee',
      imageAltText: 'Jhonothan Smith',
      recipientName: 'Mr. Jhonothan Goldsmith',
      lastMessage: 'yt',
      email: 'Jhonothan.smith@gmail.com',
    },
    {
      id: '4',
      avatarImageURL: 'http://dummyimage.com/mediumrectangle/aaaaaa/eeeeee',
      imageAltText: '',
      recipientName: '',
      lastMessage: 'hola',
      email: 'smith@gmail.com',
    },
  ],
};

describe('ChatRoomPage Component', () => {
  // const wrapper = shallow(<MessageListPage {...props} />);

  // it('renders with proper className', () => {
  //   expect(wrapper.exists(Styles.container)).toBe(true);
  //   expect(wrapper.find(`.${Styles.container}`)).toHaveLength(1);
  // });
  //
  // it('container the required prop', () => {
  //   expect(wrapper.exists(props.buttonLabelOn)).toBe(true);
  // });
  //
  // it('container the required prop', () => {
  //   expect(wrapper.exists(props.buttonLabelOff)).toBe(true);
  // });
  //
  // it('checks if toggle button is working properly', () => {
  //   const button = wrapper.find(`.${Styles.button}`);
  //   // verifying default state
  //   expect(wrapper.text()).toEqual(props.buttonLabelOn);
  //   button.simulate('click');
  // });
});

