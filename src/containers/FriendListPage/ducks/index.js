import { push } from 'react-router-redux';

import friendListPageData from '../dummyData';
import { getValueFromLocalStorage, LOCAL_STORAGE_EMAIL_KEY } from '../../../utils/localStorage';
import { setEmailAddressesInChatRoomPage } from '../../ChatRoomPage/ducks/index';

// Actions
const SET_USER_EMAIL = 'app/FriendListPage/SET_USER_EMAIL';
const SET_CHAT_ROOM_PAGE_DATA = 'app/FriendListPage/SET_CHAT_ROOM_PAGE_DATA';

// Reducer
const Reducer = (state = {}, action = {}) => {
  const user = {}; // For eslint
  switch (action.type) {
    case SET_USER_EMAIL:
      user.email = action.payload;
      return Object.assign({}, state, {
        user,
      });
    case SET_CHAT_ROOM_PAGE_DATA: {
      return Object.assign({}, state, {
        data: action.payload,
      });
    }
    default:
      return state;
  }
};

// Action Creator
export const setUserEmailAddressInFriendListPage = emailAddress => (
  { type: SET_USER_EMAIL, payload: emailAddress }
);

export const setMessagePageData = data => (
  { type: SET_CHAT_ROOM_PAGE_DATA, payload: data }
);

// Side effects, only as applicable
// e.g. thunks, epics

export const getFriendListPageData = () => (
  (dispatch, getState) => {
    // Save the user Id in local storage and messageList page
    if (!getState().friends.user) {
      const email = getValueFromLocalStorage(LOCAL_STORAGE_EMAIL_KEY);
      dispatch(setUserEmailAddressInFriendListPage(email));
    }

    // Make the Ajax call
    setTimeout(() => {
      friendListPageData.dbData.friendsList.map((message) => {
        const m = message;
        m.imageAltText = `${m.recipientName} image`;
        return m;
      });
      dispatch(setMessagePageData(friendListPageData));
      dispatch({ type: null, payload: null });
    }, 1000);
  }
);

export const goToChatRoomPageFromFriendListPage =
  ({ recipientEmail, conversationId, userEmail }) => (
    (dispatch) => {
      dispatch(setEmailAddressesInChatRoomPage({ recipientEmail, conversationId, userEmail }));
      dispatch(push(`people/${recipientEmail}`));
    });

export default Reducer;
