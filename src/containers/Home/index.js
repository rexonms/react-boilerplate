import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveUserEmailAddressOnLocalHost } from './ducks/actions'
import HomeInner from './HomeInner';

const Home = props => (
    <HomeInner {...props} />
);

const mapStateToProps = ({ home }) => ({ home });
const mapDispatchToProps = dispatch => (bindActionCreators( { saveUserEmailAddressOnLocalHost }, dispatch));

Home.defaultProps = {
  home: {},
};

Home.propTypes = {
  home: PropTypes.shape({}),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
