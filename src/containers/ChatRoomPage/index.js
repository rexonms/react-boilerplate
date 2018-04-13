import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './ducks/index';
import Styles from './ChatRoomPage.scss';
import MessageInput from '../../components/Chat/Message/MessageInput/index';
import ChatRoomList from '../../components/Chat/ChatRoom/ChatRoomList/index';

const propTypes = {
  chatRoom: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
    recipient: PropTypes.shape({
      email: PropTypes.string,
    }),
    chatHistory: PropTypes.array,
  }).isRequired,
  getChatHistory: PropTypes.func.isRequired,
  sendMessageToTheRecipient: PropTypes.func.isRequired,
  // getChatRoomPageData: PropTypes.func.isRequired,
  // goToMessageItemPageFromChatRoomPage: PropTypes.func.isRequired,
  // /** Function that needs to be triggered on user clicks enter */
  // sendMessageHandler: PropTypes.func.isRequired,
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
    this.props.getChatHistory('john@mail.com');
  }
  sendMessageHandler(message) {
    // trigger the reducer
    this.props.sendMessageToTheRecipient({
      recipient: this.props.chatRoom.recipient.email,
      message,
    });
  }
  render() {
    console.log(this.props.chatRoom);
    return (
      <div className={Styles.container}>
        <div className={Styles.header}>
          {this.props.chatRoom.user && this.props.chatRoom.user.email}
        </div>
        <div className={Styles.chatList}>
          { this.props.chatRoom.chatHistory &&
            <ChatRoomList
              userEmail={this.props.chatRoom.user.email}
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

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//
// import styles from './ChatRoomPage.scss';
//
// const defaultProps = {
//   bulbState: true,
//   buttonLabelOn: 'Off',
//   buttonLabelOff: 'On',
// };
// const propTypes = {
//   /** The default state of the bulb */
//   bulbState: PropTypes.bool,
//   /** Button label when bulb is turned on */
//   buttonLabelOn: PropTypes.string,
//   /** Button label when bulb is turned off */
//   buttonLabelOff: PropTypes.string,
// };
//
// export class ChatRoomPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bulbState: props.bulbState,
//     };
//     this.onClickHandler = this.onClickHandler.bind(this);
//     this.getBulbClass = this.getBulbClass.bind(this);
//     this.getButtonLabel = this.getButtonLabel.bind(this);
//   }
//   componentDidMount() {
//   }
//   onClickHandler() {
//     this.setState({
//       bulbState: !this.state.bulbState,
//     });
//   }
//   getBulbClass() {
//     return this.state.bulbState === true ? styles.bulbOn : styles.bulbOff;
//   }
//   getButtonLabel() {
//     return this.state.bulbState === true ? this.props.buttonLabelOn : this.props.buttonLabelOff;
//   }
//   render() {
//     return (
//       <div className={styles.container}>
//         <div className={styles.image}>
//           <div className={`${styles.bulb} ${this.getBulbClass()}`} />
//         </div>
//         <button
//           className={styles.button}
//           onClick={this.onClickHandler}
//         >
//           {this.getButtonLabel()}
//         </button>
//       </div>
//     );
//   }
// }
//
// ChatRoomPage.defaultProps = defaultProps;
// ChatRoomPage.propTypes = propTypes;
//
// export default ChatRoomPage;
