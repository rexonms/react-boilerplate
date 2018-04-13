import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './ducks/index';
import Styles from './ChatRoomPage.scss';
import MessageInput from '../../components/Chat/MessageInput/index';
import ChatRoomList from '../../components/Chat/ChatRoom/ChatRoomList/index';

const propTypes = {
  chatRoom: PropTypes.shape({
    conversationId: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
    recipient: PropTypes.shape({
      email: PropTypes.string,
    }),
    chatHistory: PropTypes.array,
  }).isRequired,
  getChatHistory: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};
const defaultProps = {
};

export class ChatRoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sendMessageHandler = this.sendMessageHandler.bind(this);
  }
  componentDidMount() {
    // need to grab user from locale storage if not logged in
    // this.props.getChatHistory(this.props.chatRoom.user.email);
    this.props.getChatHistory(this.props.chatRoom.conversationId); // send the conversation id
  }
  sendMessageHandler(message) {
    // trigger the reducer
    this.props.sendMessage({
      id: new Date(),
      isUser: true,
      author: this.props.chatRoom.user,
      recipient: this.props.chatRoom.recipient,
      message,
    });
  }
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.header}>
          {this.props.chatRoom.user && this.props.chatRoom.user.email}
        </div>
        <div className={Styles.chatList}>
          { this.props.chatRoom.chatHistory &&
            <ChatRoomList
              list={this.props.chatRoom.chatHistory}
            />
          }
        </div>
        <div className={Styles.chatInput}>
          <MessageInput label="" sendMessage={message => this.sendMessageHandler(message)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ chatRoom }) => ({ chatRoom });
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

ChatRoomPage.defaultProps = defaultProps;
ChatRoomPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoomPage);
