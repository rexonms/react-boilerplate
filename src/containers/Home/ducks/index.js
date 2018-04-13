import { push } from 'react-router-redux';
import { setValueInLocalStorage, LOCAL_STORAGE_EMAIL_KEY } from '../../../utils/localStorage';
import { setUserEmailAddressInFriendListPage } from '../../FriendListPage/ducks/index';

// Actions

// Reducers
const reducers = (state = {}, action = {}) => {
  switch (action.type) {
    // case GO_TO_MESSAGE_LIST_PAGE:
    //   return Object.assign({}, state);
    default:
      return state;
  }
};

// Action Creator
export const goToFriendListPage = email => (
  (dispatch) => {
    // first save the email on local host
    setValueInLocalStorage(LOCAL_STORAGE_EMAIL_KEY, email);
    // pass the email to messageList Page
    dispatch(setUserEmailAddressInFriendListPage(email));
    // go to FriendListPage
    dispatch(push('/people'));
  }
);

export default reducers;
