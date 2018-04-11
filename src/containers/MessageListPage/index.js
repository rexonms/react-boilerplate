import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './ducks/index';
import Styles from './MessageListPage.scss';
import LoadingBars from '../../components/Loading/LoadingBars/index';
import Heading6 from '../../components/Typography/H6/index';
import MessageList from '../../components/Chat/Message/MessageList/index';

const propTypes = {
  messages: PropTypes.shape({
    data: PropTypes.shape({}),
  }).isRequired,
  getMessageListPageData: PropTypes.func.isRequired,
  goToMessageItemPageFromMessageListPage: PropTypes.func.isRequired,
};
const defaultProps = {};

export class MessageListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  componentDidMount() {
    this.props.getMessageListPageData();
  }
  onClickHandler(recipientEmail) {
    this.props.goToMessageItemPageFromMessageListPage(recipientEmail);
  }
  render() {
    if (!this.props.messages.data) {
      return (
        <LoadingBars />
      );
    }
    const { messages } = this.props;
    return (
      <div className={Styles.container}>
        <div className={Styles.header}>
          <Heading6 labelText={messages.CHAT_BOX_USER.email} />
        </div>
        <div className={Styles.messages}>
          <MessageList
            list={messages.data.dbData.CHAT_BOX_FRIENDsList}
            onClick={this.onClickHandler}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ messages }) => ({ messages });
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

MessageListPage.defaultProps = defaultProps;
MessageListPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(MessageListPage);
