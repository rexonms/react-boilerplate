import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAwardData } from './../../redux/actions/Award';
import PageContainer from '../../components/HOC/PageContainer/index';
import AwardInner from './AwardInner';

const Award = props => (
  <PageContainer pageName="award" containerData={props.award} action={props.getAwardData}>
    <AwardInner {...props} />
  </PageContainer>
);

const mapStateToProps = ({ award }) => ({ award });
const mapDispatchToProps = dispatch => (bindActionCreators({ getAwardData }, dispatch));

Award.defaultProps = {
  award: {},
};

Award.propTypes = {
  award: PropTypes.shape({}),
  getAwardData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Award);
