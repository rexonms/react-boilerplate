export const LOCAL_STORAGE_EMAIL_KEY = '_c_e';

export const setValueInLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value)
}

export const getValueFromLocalStorage = (key) => {
  return window.localStorage.getItem(key)
}