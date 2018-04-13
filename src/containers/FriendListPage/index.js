import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './ducks/index';
import Styles from './FriendListPage.scss';
import LoadingBars from '../../components/Loading/LoadingBars/index';
import Heading6 from '../../components/Typography/H6/index';
import PeopleList from '../../components/Chat/People/PeopleList/index';

const propTypes = {
  friends: PropTypes.shape({
    data: PropTypes.shape({}),
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
  }).isRequired,
  getFriendListPageData: PropTypes.func.isRequired,
  goToChatRoomPageFromFriendListPage: PropTypes.func.isRequired,
};
const defaultProps = {};

export class FriendListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  componentDidMount() {
    this.props.getFriendListPageData();
  }
  onClickHandler({ recipientEmail, conversationId }) {
    this.props.goToChatRoomPageFromFriendListPage({
      recipientEmail,
      conversationId,
      userEmail: this.props.friends.user.email,
    });
  }
  render() {
    if (!this.props.friends.data) {
      return (
        <LoadingBars />
      );
    }
    const { friends } = this.props;
    return (
      <div className={Styles.container}>
        <div className={Styles.header}>
          <Heading6 labelText={friends.user.email} />
        </div>
        <div className={Styles.friends}>
          <PeopleList
            list={friends.data.dbData.friendsList}
            onClick={this.onClickHandler}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ friends }) => ({ friends });
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

FriendListPage.defaultProps = defaultProps;
FriendListPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(FriendListPage);
