import React from 'react';
import PropTypes from 'prop-types';

import Styles from './ChatRoomList.scss';
import ChatRoomItem from '../ChatRoomItem/index';
import { CHAT_BOX_USER, CHAT_BOX_FRIEND } from '../ChatRoomItem/Const';

const propTypes = {
  /** Name of the component */
  list: PropTypes.shape({
    /** The conversation id */
    id: PropTypes.string,
    /** Email address of the author */
    authorEmail: PropTypes.string,
    /** Message sent by user */
    message: PropTypes.string,
  }).isRequired,
};

const defaultProps = {};
const userEmail = 'rexonms@gmail.com';

const ChatRoomList = props => (
  <div className={`${Styles.container}`}>
    {Object.keys(props.list).map((item) => {
      const conversation = props.list[item];
      const type = userEmail === conversation.authorEmail ? CHAT_BOX_USER : CHAT_BOX_FRIEND;
      return (
        <div key={`conv-${conversation.id}`} className={`${Styles.content} ${Styles[type]}`}>
          <ChatRoomItem
            id={conversation.id}
            message={conversation.message}
            type={type}
            imageURL={conversation.imageURL}
            imageAltText={conversation.imageAltText}
          />
        </div>
      );
    })}
  </div>
);

ChatRoomList.defaultProps = defaultProps;
ChatRoomList.propTypes = propTypes;

export default ChatRoomList;
