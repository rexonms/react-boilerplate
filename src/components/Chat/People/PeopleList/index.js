import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './PeopleList.scss';
import MessageItem from '../PeopleItem/index';

const propTypes = {
  /** List of people */
  list: PropTypes.arrayOf(PropTypes.shape({
    /** Unique id for the message */
    id: PropTypes.string.isRequired,
    /** The conversation id with that friend */
    conversationId: PropTypes.string.isRequired,
    /** Recipient Name */
    recipientName: PropTypes.string.isRequired,
    /** Recipient Email */
    recipientEmail: PropTypes.string.isRequired,
    /** Image URL for the avatar */
    avatarImageURL: PropTypes.string.isRequired,
    /** Last message sent by recipient */
    lastMessage: PropTypes.string.isRequired,
  })).isRequired,
  /** Passing the onClick function to parent */
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
};

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler({ recipientEmail, conversationId }) {
    this.props.onClick({ recipientEmail, conversationId });
  }
  render() {
    return (
      <div className={styles.container}>
        {this.props.list.map(item => (
          <MessageItem
            key={item.id}
            conversationId={item.conversationId}
            recipientName={item.recipientName}
            recipientEmail={item.recipientEmail}
            avatarImageURL={item.avatarImageURL}
            imageAltText={item.imageAltText}
            lastMessage={item.lastMessage}
            onClick={this.onClickHandler}
          />
        ))}
      </div>
    );
  }
}

PeopleList.defaultProps = defaultProps;
PeopleList.propTypes = propTypes;

export default PeopleList;
