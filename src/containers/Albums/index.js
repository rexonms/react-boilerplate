import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './Albums.scss';

const propTypes = {};
const defaultProps = {};

class Albums extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
  }
  render () {
    return (
      <div className={styles.container}>
        <p>Here</p>
      </div>
    )
  }
};
const mapStateToProps = ({ albums }) => ({ albums });
const mapDispatchToProps = dispatch => (bindActionCreators({ }, dispatch));

Albums.defaultProps = defaultProps;
Albums.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
