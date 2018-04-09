import { push } from 'react-router-redux'

export const saveUserEmailAddressOnLocalHost = (emailAddress) => {
  return (dispatch, getStore) => {
    dispatch(push('/albums'));
  }
};