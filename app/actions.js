// actions.js

import { SET_USER_DATA, SET_AUTH_STATUS, SET_VALIDATION_ERROR } from './ActionTypes';

export const setUserData = (token, name, email, userid) => ({
  type: SET_USER_DATA,
  payload: { token, name, email, userid },
});

export const setAuthStatus = (isLoggedIn) => ({
  type: SET_AUTH_STATUS,
  payload: isLoggedIn,
});

export const setValidationError = (error) => ({
  type: SET_VALIDATION_ERROR,
  payload: error,
});
