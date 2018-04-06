import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../../components/Title/index';
import './style.scss';

class LeaderboardInner extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { translations } = this.props.leaderboard.data;
    return (
      <div className="leaderboard">
        <Title label={translations.message} />
      </div>
    );
  }
}


LeaderboardInner.defaultProps = {
  leaderboard: {
    data: {
      translations: {},
    },
  },
};

LeaderboardInner.propTypes = {
  leaderboard: PropTypes.shape({
    data: PropTypes.shape({
      translations: PropTypes.shape({}),
    }),
  }),
};

export default LeaderboardInner;
