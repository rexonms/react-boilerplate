// Actions
import { dummyMessages, chatterAEmail, chatterBEmail } from '../dummyData';

const SET_EMAIL_ADDRESSES = 'app/chatRoomPage/SET_EMAIL_ADDRESSES';
const SEND_MESSAGE_TO_RECIPIENT = 'app/chatRoomPage/SEND_MESSAGE_TO_RECIPIENT';
const SET_CHAT_HISTORY = 'app/chatRoomPage/SET_CHAT_HISTORY';
const UPDATE_CHAT_HISTORY = 'app/chatRoomPage/UPDATE_CHAT_HISTORY';
const ADD_TO_CHAT_HISTORY = 'app/chatRoomPage/ADD_TO_CHAT_HISTORY';

// Temp
const tempInitialState = {
  user: chatterAEmail,
  recipient: chatterBEmail,
  conversationId: '100',
};
// Reducer
const Reducer = (state = tempInitialState, action = {}) => {
  switch (action.type) {
    case SET_EMAIL_ADDRESSES:
      return {
        ...state,
        user: action.payload.userEmail,
        recipient: action.payload.recipientEmail,
        conversationId: action.payload.conversationId,
      };
    case SET_CHAT_HISTORY:
      return {
        ...state,
        chatHistory: action.payload,
      };
    case UPDATE_CHAT_HISTORY: {
      const newState = JSON.parse(JSON.stringify(state));
      const { chatHistory } = newState;
      chatHistory[action.payload.id] = action.payload;
      return newState;
    }
    case ADD_TO_CHAT_HISTORY:
      return { ...state };
    default:
      return state;
  }
};

// Action Creator
export const setEmailAddressesInChatRoomPage =
  ({ userEmail, recipientEmail, conversationId }) =>
    ({
      type: SET_EMAIL_ADDRESSES,
      payload: { userEmail, recipientEmail, conversationId },
    });

export const sendMessageToTheRecipient = obj => (
  { type: SEND_MESSAGE_TO_RECIPIENT, payload: obj }
);

export const setChatHistory = messagesByHash => (
  {
    type: SET_CHAT_HISTORY,
    payload: messagesByHash,
  }
);


// Side effects, only as applicable
// e.g. thunks, epics

export const getChatHistory = conversationId => (
  (dispatch) => {
    const { conversations } = dummyMessages;
    const conversation = conversations[conversationId];
    const { messagesByHash } = conversation;
    dispatch(setChatHistory(messagesByHash));
  }
);

export const updateChatHistory =
  ({
    id,
    isUser,
    author,
    recipient,
    message,
  }) => (
    {
      type: UPDATE_CHAT_HISTORY,
      payload:
        {
          id,
          isUser,
          author,
          recipient,
          message,
        },
    }
  );

/**
 *
 * @param {sender, recipient, message }
 */
export const sendMessage =
  ({
    id,
    isUser,
    author,
    recipient,
    message,
  }) => (
    (dispatch) => {
      // dispatch to the server
      dispatch(updateChatHistory({
        id,
        isUser,
        author,
        recipient,
        message,
      }));
    }
  );

export default Reducer;
