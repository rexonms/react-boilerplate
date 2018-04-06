import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLeaderboardData } from '../../redux/actions/Leaderboard';
import PageContainer from '../../components/HOC/PageContainer/index';
import LeaderboardInner from './LeaderboardInner';

const Leaderboard = props => (
  <PageContainer pageName="leaderboard" containerData={props.leaderboard} action={props.getLeaderboardData}>
    <LeaderboardInner {...props} />
  </PageContainer>
);

const mapStateToProps = ({ leaderboard }) => ({ leaderboard });
const mapDispatchToProps = dispatch => (bindActionCreators({ getLeaderboardData }, dispatch));

Leaderboard.defaultProps = {
  leaderboard: {},
};

Leaderboard.propTypes = {
  leaderboard: PropTypes.shape({}),
  getLeaderboardData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
