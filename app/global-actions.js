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
