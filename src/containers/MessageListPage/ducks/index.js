import { push } from 'react-router-redux';

import messengerListPageData from '../dummtData';
import { getValueFromLocalStorage, LOCAL_STORAGE_EMAIL_KEY } from '../../../utils/localStorage';

// Actions
const SET_CHAT_BOX_USER_EMAIL = 'app/messageListPage/SET_CHAT_BOX_USER_EMAIL';
const SET_MESSAGE_LIST_PAGE_DATA = 'app/messageListPage/SET_MESSAGE_LIST_PAGE_DATA';

// Reducer
const Reducer = (state = {}, action = {}) => {
  const CHAT_BOX_USER = {}; // For eslint
  switch (action.type) {
    case SET_CHAT_BOX_USER_EMAIL:
      CHAT_BOX_USER.email = action.payload;
      return Object.assign({}, state, {
        CHAT_BOX_USER,
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
export const setCHAT_BOX_USEREmailAddressInMessageListPage = emailAddress => (
  { type: SET_CHAT_BOX_USER_EMAIL, payload: emailAddress }
);

export const setMessagePageData = data => (
  { type: SET_MESSAGE_LIST_PAGE_DATA, payload: data }
);

// Side effects, only as applicable
// e.g. thunks, epics

export const getMessageListPageData = () => (
  (dispatch, getState) => {
    if (!getState().messages.CHAT_BOX_USER) {
      const email = getValueFromLocalStorage(LOCAL_STORAGE_EMAIL_KEY);
      dispatch(setCHAT_BOX_USEREmailAddressInMessageListPage(email));
    }

    // Make the Ajax call
    setTimeout(() => {
      messengerListPageData.dbData.CHAT_BOX_FRIENDsList.map((message) => {
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
