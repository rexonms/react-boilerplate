import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './MessageItem.scss';
import Avatar from '../../Avatar/index';
import Heading6 from '../../../Typography/H6/index';
import Paragraph from '../../../Typography/Paragraph/index';

const propTypes = {
  /** Image that will be displayed as Avatar */
  avatarImageURL: PropTypes.string.isRequired,
  /** Alternate text for image */
  imageAltText: PropTypes.string.isRequired,
  /** Name of the message recipient */
  recipientName: PropTypes.string.isRequired,
  /** The last message that was sent to the recipient */
  lastMessage: PropTypes.string.isRequired,
  /** Email address of the recipient */
  email: PropTypes.string.isRequired,
  /** Action that needs to be triggered when item is clicked */
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {};

class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    this.props.onClick(this.props.email);
  }

  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.inner}>
          <div className={Styles.avatar}>
            <Avatar
              imageURL={this.props.avatarImageURL}
              imageAltText={this.props.imageAltText}
            />
          </div>
          <div className={Styles.details}>
            <Heading6 labelText={this.props.recipientName} />
            <Paragraph label={this.props.lastMessage} size="small" />
          </div>
        </div>
        <button onClick={this.onClickHandler} />
      </div>
    );
  }
}

MessageItem.defaultProps = defaultProps;
MessageItem.propTypes = propTypes;

export default MessageItem;
