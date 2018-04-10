import messengerListPageData from './../data'
import { getValueFromLocalStorage, LOCAL_STORAGE_EMAIL_KEY } from '../../../utils/localStorage';
// Actions
const SET_USER_EMAIL = 'app/messageListPage/SET_USER_EMAIL';
const SET_MESSAGE_LIST_PAGE_DATA = 'app/messageListPage/SET_MESSAGE_LIST_PAGE_DATA';

// Reducer
const Reducer = (state = {}, action ={}) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      const user = {};
      user.email = action.payload;
      return Object.assign({}, state, {
        user: user,
      });
    case SET_MESSAGE_LIST_PAGE_DATA: {
      return Object.assign({}, state, {
        data: action.payload,
      });
    }
    default:
      return state;
  }
}


// Action Creator
export const setUserEmailAddressInMessageListPage = (emailAddress) => (
   { type: SET_USER_EMAIL, payload: emailAddress }
)

export const getMessageListPageData = () => {
  return (dispatch, getState) => {
    if(!getState().messages.user) {
      const email = getValueFromLocalStorage(LOCAL_STORAGE_EMAIL_KEY);
      dispatch(setUserEmailAddressInMessageListPage(email));
    }

    // Make the Ajax call
    setTimeout(() =>{
      dispatch(setMessagePageData(messengerListPageData));
      dispatch({ type: null, payload: null })
    }, 5000)
  }
}

export const setMessagePageData = (data) => {
  return ({
    type: SET_MESSAGE_LIST_PAGE_DATA,
    payload: data,
  })
}



export default Reducer;
