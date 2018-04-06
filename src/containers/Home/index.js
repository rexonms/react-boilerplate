import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHomeData } from '../../redux/actions/Home';
import PageContainer from '../../components/HOC/PageContainer/index';
import HomeInner from './HomeInner';

const Home = props => (
  <PageContainer pageName="home" containerData={props.home} action={props.getHomeData}>
    <HomeInner {...props} />
  </PageContainer>
);

const mapStateToProps = ({ home }) => ({ home });
const mapDispatchToProps = dispatch => (bindActionCreators({ getHomeData }, dispatch));

Home.defaultProps = {
  home: {},
};

Home.propTypes = {
  home: PropTypes.shape({}),
  getHomeData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
