import { push } from 'react-router-redux';
import { setValueInLocalStorage, LOCAL_STORAGE_EMAIL_KEY } from '../../../utils/localStorage';
import { setCHAT_BOX_USEREmailAddressInMessageListPage } from '../../MessageListPage/ducks/index';

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
export const goToMessageListPage = email => (
  (dispatch) => {
    // first save the email on local host
    setValueInLocalStorage(LOCAL_STORAGE_EMAIL_KEY, email);
    // pass the email to messageList Page
    dispatch(setCHAT_BOX_USEREmailAddressInMessageListPage(email));
    // go to messageListPage
    dispatch(push('/messages'));
  }
);

export default reducers;
