import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './MessageListPage.scss';

const propTypes = {};
const defaultProps = {};

class MessageListPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
  }
  render () {
    return (
      <div className={styles.container}>
        <p>{this.props.messages.email}</p>
      </div>
    )
  }
};
const mapStateToProps = ({ messages }) => ({ messages });
const mapDispatchToProps = dispatch => (bindActionCreators({ }, dispatch));

MessageListPage.defaultProps = defaultProps;
MessageListPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(MessageListPage);
