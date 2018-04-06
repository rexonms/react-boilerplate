import React from 'react';
import PropTypes from 'prop-types';

import styles from './MessageItem.scss';
import Avatar from '../../Avatar/index';
import Paragraph from '../../Typography/Paragraph/index';
import Heading6 from '../../Typography/H6/index';

const MessageItem = props => (
  <div className={`${styles.container}`}>
    <div className={`${styles.avatar}`}>
      <Avatar imageURL={props.avatarImageURL} />
    </div>
    <div className={`${styles.details}`}>
      <Heading6 labelText={props.recipientName}/>
      <Paragraph label={props.lastMessage} size='small'/>
    </div>
  </div>
);

MessageItem.defaultProps = {};

MessageItem.propTypes = {
  /** The location of the image for avatar */
  avatarImageURL: PropTypes.string.isRequired,
  /** The name of the message recipient/group */
  recipientName: PropTypes.string.isRequired,
  /** The last message that the recipient received */
  lastMessage: PropTypes.string.isRequired
};

export default MessageItem;
