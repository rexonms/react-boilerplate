import React from 'react';
import PropTypes from 'prop-types';

import Styles from './ChatRoomItem.scss';
import { CHAT_BOX_FRIEND, CHAT_BOX_USER } from './Const';
import Avatar from '../../Avatar/index';

const propTypes = {
  /** The chat message that needs to be dispalyed */
  message: PropTypes.string.isRequired,
  /** The chat message from the CHAT_BOX_FRIEND or CHAT_BOX_USER */
  type: PropTypes.oneOf([CHAT_BOX_FRIEND, CHAT_BOX_USER]).isRequired,
  /** Recipient thumbnailURl */
  imageURL: PropTypes.string,
  /** Recipient AltText */
  imageAltText: PropTypes.string,
};
const defaultProps = {
  imageURL: '',
  imageAltText: '',
};

const ChatRoomItem = props => (
  <div className={`${Styles.container} ${Styles[props.type]}`}>
    {props.type === CHAT_BOX_FRIEND &&
      <div className={Styles.thumbnail}>
        <Avatar imageURL={props.imageURL} imageAltText={props.imageAltText} />
      </div>
    }
    <div className={`side ${Styles.message}`}>
      <p>{props.message}</p>
    </div>
  </div>
);

ChatRoomItem.defaultProps = defaultProps;
ChatRoomItem.propTypes = propTypes;

export default ChatRoomItem;
