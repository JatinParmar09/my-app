// userReducer.js

import { SET_USER_DATA, SET_AUTH_STATUS, SET_VALIDATION_ERROR } from './ActionTypes';

const initialState = {
  token: null,
  name: '',
  email: '',
  userid: '',
  isLoggedIn: false,
  validationError: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        email: action.payload.email,
        userid: action.payload.userid,
      };
    case SET_AUTH_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case SET_VALIDATION_ERROR:
      return {
        ...state,
        validationError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
