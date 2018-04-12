import { push } from 'react-router-redux';

import messengerListPageData from '../dummtData';
import { getValueFromLocalStorage, LOCAL_STORAGE_EMAIL_KEY } from '../../../utils/localStorage';

// Actions
const SET_USER_EMAIL = 'app/messageListPage/SET_USER_EMAIL';
const SET_MESSAGE_LIST_PAGE_DATA = 'app/messageListPage/SET_MESSAGE_LIST_PAGE_DATA';

// Reducer
const Reducer = (state = {}, action = {}) => {
  const user = {}; // For eslint
  switch (action.type) {
    case SET_USER_EMAIL:
      user.email = action.payload;
      return Object.assign({}, state, {
        user,
      });
    case SET_MESSAGE_LIST_PAGE_DATA: {
      return Object.assign({}, state, {
        data: action.payload,
      });
    }
    default:
      return state;
  }
};

// Action Creator
export const setUserEmailAddressInMessageListPage = emailAddress => (
  { type: SET_USER_EMAIL, payload: emailAddress }
);

export const setMessagePageData = data => (
  { type: SET_MESSAGE_LIST_PAGE_DATA, payload: data }
);

// Side effects, only as applicable
// e.g. thunks, epics

export const getMessageListPageData = () => (
  (dispatch, getState) => {
    // Save the user Id in local storage and messageList page
    if (!getState().messages.user) {
      const email = getValueFromLocalStorage(LOCAL_STORAGE_EMAIL_KEY);
      dispatch(setUserEmailAddressInMessageListPage(email));
    }

    // Make the Ajax call
    setTimeout(() => {
      messengerListPageData.dbData.friendsList.map((message) => {
        const m = message;
        m.imageAltText = `${m.recipientName} image`;
        return m;
      });
      dispatch(setMessagePageData(messengerListPageData));
      dispatch({ type: null, payload: null });
    }, 1000);
  }
);

export const goToMessageItemPageFromMessageListPage = recipientEmail => (
  (dispatch) => {
    dispatch({ type: null });
    dispatch(push(`messages/${recipientEmail}`));
  }
);

export default Reducer;
