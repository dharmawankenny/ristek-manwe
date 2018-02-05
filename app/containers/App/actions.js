/*
 *
 * Global actions
 *
 */

import {
  CHANGE_USER_DATA,
  LOG_OUT,
  LOADING,
  LOADING_DONE,
  LOADING_ERR,
  CHANGE_USER_PROFILE,
  FLASH_MESSAGE,
  LOAD_SERVER_TIME,
  LOAD_SERVER_TIME_SUCCESS,
  // FETCH_INITIAL_DATA,
  // FETCH_INITIAL_DATA_SUCCESS,
  INCREMENT_TIME,
} from './constants';

export function changeUserData(user) {
  return {
    type: CHANGE_USER_DATA,
    payload: {
      user,
    },
  };
}

export function changeUserProfile(newUser) {
  return {
    type: CHANGE_USER_PROFILE,
    payload: {
      newUser,
    },
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function loading() {
  return {
    type: LOADING,
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

// export function fetchInitialData(userId) {
//   return {
//     type: FETCH_INITIAL_DATA,
//     payload: {
//       userId,
//     }
//   };
// }

// export function fetchInitialDataSuccess(userProfile) {
//   return {
//     type: FETCH_INITIAL_DATA_SUCCESS,
//     payload: {
//       userProfile,
//     }
//   };
// }

export function incrementTime(incrementedTime) {
  return {
    type: INCREMENT_TIME,
    payload: {
      incrementedTime,
    },
  };
}
