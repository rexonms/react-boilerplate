// Actions

const SET_USER_EMAIL = 'app/messageListPage/SET_USER_EMAIL';

// Reducer
export default function (state = {}, action ={}) {
  switch (action.type) {
    case SET_USER_EMAIL:
      return Object.assign({}, state, {
        email: action.payload,
      });
    default:
      return state;
  }
}

// Action Creator

export function setUserEmailAddressInMessageListPage(emailAddress) {
  return { type: SET_USER_EMAIL, payload: emailAddress };
}

