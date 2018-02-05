import {
  SET_USER,
  SET_USER_PROFILE,
  LOGOUT,
  LOADING,
  SUCCESS,
  ERROR,
  GET_SERVER_TIME,
  GET_SERVER_TIME_SUCCESS,
  INCREMENT_TIME,
  FLASH_MESSAGE,
  LOADING_DONE,
  LOADING_ERR,
  LOAD_SERVER_TIME,
  LOAD_SERVER_TIME_SUCCESS,
} from './global-constants';

export function setUser(user) {
  return {
    type: SET_USER,
    payload: { user },
  };
}

export function setUserProfile(userProfile) {
  return {
    type: SET_USER_PROFILE,
    payload: { userProfile },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}

export function success() {
  return {
    type: SUCCESS,
  };
}

export function error() {
  return {
    type: ERROR,
  };
}

export function getServerTime() {
  return {
    type: GET_SERVER_TIME,
  };
}

export function getServerTimeSuccess(serverTime) {
  return {
    type: GET_SERVER_TIME_SUCCESS,
    payload: { serverTime },
  };
}

export function incrementTime() {
  return {
    type: INCREMENT_TIME,
  };
}

export function flash(message) {
  return {
    type: FLASH_MESSAGE,
    payload: { message },
  };
}

export function loadingDone() {
  return {
    type: LOADING_DONE,
  };
}

export function loadingErr() {
  return {
    type: LOADING_ERR,
  };
}

export function editFlashMessage(message) {
  return {
    type: FLASH_MESSAGE,
    payload: {
      message,
    },
  };
}

export function loadServerTime() {
  return {
    type: LOAD_SERVER_TIME,
  };
}

export function loadServerTimeSuccess(serverTime) {
  return {
    type: LOAD_SERVER_TIME_SUCCESS,
    payload: {
      serverTime,
    },
  };
}
