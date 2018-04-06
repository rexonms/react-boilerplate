import React from 'react';
import PropTypes from 'prop-types';

import styles from './MessageList.scss';
import MessageItem from '../MessageItem/index';

const MessageList = props => (
  <div className={`${styles.container}`}>
    {props.list.map( item => (
      <MessageItem
        key={item.id}
        avatarImageURL={item.avatarImageURL}
        recipientName={item.recipientName}
        lastMessage={item.lastMessage}
      />)
    )}
  </div>
);

MessageList.defaultProps = {};

MessageList.propTypes = {
  /** And array of object that has message list */
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatarImageURL: PropTypes.string.isRequired,
    recipientName: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
  })).isRequired,
};

export default MessageList;
