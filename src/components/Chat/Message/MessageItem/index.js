import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './MessageItem.scss';
import Avatar from '../../../Avatar/index';
import Heading6 from '../../../Typography/H6/index';
import Paragraph from '../../../Typography/Paragraph/index';

const propTypes = {
  /** Image that will be displayed as Avatar */
  avatarImageURL: PropTypes.string.isRequired,
  /** Name of the message recipient */
  recipientName: PropTypes.string.isRequired,
  /** The last message that was sent to the recipient */
  lastMessage: PropTypes.string.isRequired,
};

const defaultProps = {};

class MessageItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    alert(`Start chatting with ${this.props.recipientName}`)
  }

  render () {
    return (
      <div className={styles.container} onClick={this.onClickHandler}>
        <div className={styles.avatar}>
          <Avatar imageURL={this.props.avatarImageURL} />
        </div>
        <div className={styles.details}>
          <Heading6 labelText={this.props.recipientName} />
          <Paragraph label={this.props.lastMessage} size='small' />
        </div>
      </div>
    )
  }
};

MessageItem.defaultProps = defaultProps;
MessageItem.propTypes = propTypes;

export default MessageItem;
