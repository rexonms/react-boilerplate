import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './ducks/';
import LoadingBars from '../../components/lib/Loading/LoadingBars/';
import Home from '../../components/Home/';

const propTypes = {
  home: PropTypes.shape({
    data: PropTypes.shape({}),
  }),
  getHomeContainerData: PropTypes.func.isRequired,
};
const defaultProps = {
  home: {},
};

const HomeContainer = (props) => {
  if (!props.home.data) {
    props.getHomeContainerData();
    return <LoadingBars />;
  }
  return <Home {...props.home.data} />;
};

const mapStateToProps = ({ home }) => ({ home });
const mapDispatchToProps = dispatch => (bindActionCreators(actions, dispatch));

HomeContainer.defaultProps = defaultProps;
HomeContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
