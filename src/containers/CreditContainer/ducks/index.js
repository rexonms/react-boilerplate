import translation from './translations';
// Actions
const SET_CREDIT_CONTAINER_INITIAL_ARGUMENTS = 'app/CreditContainer/SET_CREDIT_CONTAINER_INITIAL_ARGUMENTS';
const SET_CREDIT_CONTAINER_DATA = 'app/CreditContainer/SET_CREDIT_CONTAINER_DATA';


// Reducers
const CreditContainerReducers = (state = {}, action = {}) => {
  switch (action.type) {
    case SET_CREDIT_CONTAINER_INITIAL_ARGUMENTS:
      return Object.assign({}, state, {
        initialArguments: action.payload,
      });
    case SET_CREDIT_CONTAINER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// Action Creators
export const setInitialArguments = initialArguments => ({
  type: SET_CREDIT_CONTAINER_INITIAL_ARGUMENTS,
  payload: initialArguments,
});

// Side effects
export const getCreditContainerData = () => (
  dispatch => (
    setTimeout(() => {
      dispatch({
        type: SET_CREDIT_CONTAINER_DATA,
        payload: translation,
      });
    }, 1000)
  )
);

export default CreditContainerReducers;
