import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './MessageList.scss';
import MessageItem from '../MessageItem/index';

const propTypes = {
  /** List of messages */
  list: PropTypes.arrayOf(PropTypes.shape({
    /** Unique id for the message */
    id: PropTypes.string.isRequired,
    /** Image URL for the avatar */
    avatarImageURL: PropTypes.string.isRequired,
    /** Recipient Name */
    recipientName: PropTypes.string.isRequired,
    /** Last message sent by recipient */
    lastMessage: PropTypes.string.isRequired,
  })).isRequired
};

const defaultProps = {
};

class MessageList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className={styles.container}>
        {this.props.list.map(item => (
          <MessageItem
            key={item.id}
            avatarImageURL={item.avatarImageURL}
            recipientName={item.recipientName}
            lastMessage={item.lastMessage}
          />
        ))}
      </div>
    )
  }
};

MessageList.defaultProps = defaultProps;
MessageList.propTypes = propTypes;

export default MessageList;