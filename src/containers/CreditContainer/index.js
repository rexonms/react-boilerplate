import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './ducks/';
import LoadingBars from '../../components/lib/Loading/LoadingBars/';
import Credit from '../../components/features/Credit';

const propTypes = {
  credit: PropTypes.shape({
    data: PropTypes.shape({}),
  }),
  getCreditContainerData: PropTypes.func.isRequired,
};
const defaultProps = {
  credit: {},
};

const CreditContainer = (props) => {
  if (!props.credit.data) {
    props.getCreditContainerData();
    return <LoadingBars />;
  }
  return <Credit {...props.credit.data} />;
};

const mapStateToProps = ({ credit }) => ({ credit });
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

CreditContainer.defaultProps = defaultProps;
CreditContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CreditContainer);
