// Actions
import { dummyMessages, chatterAImage, chatterBImage } from '../dummyData';

const SET_EMAIL_ADDRESSES = 'app/chatRoomPage/SET_EMAIL_ADDRESSES';
const SEND_MESSAGE_TO_RECIPIENT = 'app/chatRoomPage/SEND_MESSAGE_TO_RECIPIENT';
const SET_CHAT_HISTORY = 'app/chatRoomPage/SET_CHAT_HISTORY';

// Reducer
const Reducer = (state = {}, action = {}) => {
  const recipient = {}; // For eslint
  const user = {};
  switch (action.type) {
    case SET_EMAIL_ADDRESSES:
      recipient.email = action.payload.userEmail;
      user.email = action.payload.recipientEmail;
      return Object.assign({}, state, {
        recipient,
        user,
      });
    case SET_CHAT_HISTORY:
      return Object.assign({}, state, {
        chatHistory: action.payload,
      });
    default:
      return state;
  }
};

// Action Creator
export const setEmailAddressesInChatRoomPage = (userEmail, recipientEmail) => (
  { type: SET_EMAIL_ADDRESSES, payload: { userEmail, recipientEmail } }
);

export const sendMessageToTheRecipient = obj => (
  { type: SEND_MESSAGE_TO_RECIPIENT, payload: obj }
);

export const getChatHistory = (userEmail) => {
  const { conversations } = dummyMessages;
  const conversationId = 1;
  const conversation = conversations[conversationId];
  const { messages } = conversation;
  console.log('messages', messages);
  const payload = messages.map((message) => {
    const m = message;
    m.imageURL = message.sender === userEmail ? chatterAImage : chatterBImage;
    m.imageAltText = 'image';
    return m;
  });
  console.log(payload);
  return { type: SET_CHAT_HISTORY, payload };
};

// Side effects, only as applicable
// e.g. thunks, epics

//
// export const goToChatRoomPageFromMessageListPage = recipientEmail => (
//   (dispatch) => {
//     dispatch({ type: null });
//     dispatch(push(`messages/${recipientEmail}`));
//   }
// );

export default Reducer;
