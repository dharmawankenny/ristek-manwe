/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USER,
  SET_USER_PROFILE,
  LOGOUT,
  LOADING,
  SUCCESS,
  ERROR,
  GET_SERVER_TIME_SUCCESS,
  INCREMENT_TIME,
  FLASH_MESSAGE,
} from './global-constants';

const initialState = fromJS({
  user: {},
  serverTime: {},
  message: '',
  loading: false,
  success: false,
  error: false,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return state.set('loading', true);
    case ERROR:
      return state.set('loading', false).set('success', false).set('error', true);
    case SUCCESS:
      return state.set('loading', false).set('error', false).set('success', true);
    case SET_USER:
      return state.set('user', action.payload.user);
    case SET_USER_PROFILE:
      return state.setIn(['user', 'user_profile'], action.payload.userProfile);
    case LOGOUT:
      return state.set('user', {});
    case GET_SERVER_TIME_SUCCESS:
      return state.set('serverTime', action.payload.serverTime);
    case INCREMENT_TIME:
      return state.set('serverTime', action.payload.serverTime);
    case FLASH_MESSAGE:
      return state.set('message', action.payload.message);
    default:
      return state;
  }
}

export default globalReducer;
