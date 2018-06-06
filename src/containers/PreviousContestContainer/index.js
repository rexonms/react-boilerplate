import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './ducks/';
import LoadingBars from '../../components/lib/Loading/LoadingBars/';
import PreviousContest from '../../components/features/PreviousContest/';

const propTypes = {
  previousContest: PropTypes.shape({
    data: PropTypes.shape({}),
  }),
  getPreviousContestContainerData: PropTypes.func.isRequired,
};
const defaultProps = {
  previousContest: {},
};

const PreviousContestContainer = (props) => {
  if (!props.previousContest.data) {
    props.getPreviousContestContainerData();
    return <LoadingBars />;
  }
  return <PreviousContest {...props.previousContest.data} />;
};

const mapStateToProps = ({ previousContest }) => ({ previousContest });
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

PreviousContestContainer.defaultProps = defaultProps;
PreviousContestContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PreviousContestContainer);
