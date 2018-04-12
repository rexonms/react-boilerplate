import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './ducks/index';
import Styles from './ChatRoomPage.scss';

const propTypes = {
  // messages: PropTypes.shape({
  //   data: PropTypes.shape({}),
  // }).isRequired,
  // getChatRoomPageData: PropTypes.func.isRequired,
  // goToMessageItemPageFromChatRoomPage: PropTypes.func.isRequired,
};
const defaultProps = {};

export class ChatRoomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // this.props.getChatRoomPageData();
  }
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.chatList}>
          chat list
        </div>
        <div className={Styles.chatInput} />
      </div>
    );
  }
}

const mapStateToProps = ({ messages }) => ({ messages });
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
