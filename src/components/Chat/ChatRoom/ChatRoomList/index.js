import React from 'react';
import PropTypes from 'prop-types';

import Styles from './ChatRoomList.scss';
import ChatRoomItem from '../ChatRoomItem/index';
import { CHAT_BOX_USER, CHAT_BOX_FRIEND } from '../ChatRoomItem/Const';

// arrayWithShape: PropTypes.arrayOf(PropTypes.shape({
//   color: PropTypes.string.isRequired,
//   fontSize: PropTypes.number.isRequired,
// })).isRequired,
// }

const propTypes = {
  /** Email address of the user */
  userEmail: PropTypes.string.isRequired,
  /** Name of the component */
  list: PropTypes.arrayOf(PropTypes.shape({
    /** The conversation id */
    id: PropTypes.string,
    /** Email address of the author */
    authorEmail: PropTypes.string,
    /** Message sent by user */
    message: PropTypes.string,
  })).isRequired,
};

const defaultProps = {};

const ChatRoomList = props => (
  <div className={`${Styles.container}`}>
    {props.list.map((item) => {
      const conversation = item;
      const type = props.userEmail === conversation.authorEmail ? CHAT_BOX_USER : CHAT_BOX_FRIEND;
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
