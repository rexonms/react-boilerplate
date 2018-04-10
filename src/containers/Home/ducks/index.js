import { push } from 'react-router-redux'
import { setValueInLocalStorage, LOCAL_STORAGE_EMAIL_KEY } from '../../../utils/localStorage';
import { setUserEmailAddressInMessageListPage } from '../../MessageListPage/ducks/index';

// Actions
const GO_TO_MESSAGE_LIST_PAGE = 'app/messageListPage/GO_TO_MESSAGE_LIST_PAGE';

// Reducers
export default function (state = {}, action ={}) {
  switch (action.type) {
    case GO_TO_MESSAGE_LIST_PAGE:
      return Object.assign({}, state);
    default:
      return state;
  }
}

// Action Creator
export function goToMessageListPage(email) {
  return dispatch => {
    // first save the email on local host
    setValueInLocalStorage(LOCAL_STORAGE_EMAIL_KEY, email);
    // pass the email to messageList Page
    dispatch(setUserEmailAddressInMessageListPage(email));
    // go to messageListPage
    dispatch(push('/messages'));
  }
}
