import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import Styles from './ChatRoomList.scss';
import ChatRoomItem from '../ChatRoomItem/index';
import { CHAT_BOX_USER, CHAT_BOX_FRIEND } from '../ChatRoomItem/Const';

const propTypes = {
  /** Name of the component */
  list: PropTypes.shape({
    /** The conversation id */
    id: PropTypes.string,
    /** isUser: Controls if the user image should be visible or not */
    isUser: PropTypes.bool.isRequired,
    /** Author details */
    author: PropTypes.shape({}).isRequired,
    /** Recipient details */
    recipient: PropTypes.shape({}).isRequired,
    /** Message sent by user */
    message: PropTypes.string,
    /** */
    length: PropTypes.number,
  }).isRequired,
};

const defaultProps = {};

class ChatRoomList extends Component {
  constructor() {
    super();
    this.listRef = createRef();
  }
  getSnapshotBeforeUpdate(prevProps) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (Object.keys(prevProps.list).length < Object.keys(this.props.list).length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log(snapshot);
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef} className={`${Styles.container}`}>
        {Object.keys(this.props.list).map((key) => {
          const conversation = this.props.list[key];
          const type = conversation.isUser ? CHAT_BOX_USER : CHAT_BOX_FRIEND;
          const imageURL = conversation.isUser ?
            conversation.author.imageURL : conversation.recipient.imageURL;
          const imageAltText = conversation.isUser ?
              conversation.author.imageAltText : conversation.recipient.imageAltText;
          return (
            <div key={`conversation-${conversation.id}`} className={`${Styles.content} ${Styles[type]}`}>
              <ChatRoomItem
                id={conversation.id}
                message={conversation.message}
                type={type}
                imageURL={imageURL}
                imageAltText={imageAltText}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

ChatRoomList.defaultProps = defaultProps;
ChatRoomList.propTypes = propTypes;

export default ChatRoomList;
