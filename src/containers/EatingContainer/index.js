import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './ducks/';
import LoadingBars from '../../components/lib/Loading/LoadingBars/';
import Eating from '../../components/features/Eating/';

const propTypes = {
  eating: PropTypes.shape({
    data: PropTypes.shape({}),
  }),
  getEatingContainerData: PropTypes.func.isRequired,
};
const defaultProps = {
  eating: {},
};

const EatingContainer = (props) => {
  if (!props.eating.data) {
    props.getEatingContainerData();
    return <LoadingBars />;
  }
  return <Eating {...props.eating.data} />;
};

const mapStateToProps = ({ eating }) => ({ eating });
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

EatingContainer.defaultProps = defaultProps;
EatingContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(EatingContainer);
