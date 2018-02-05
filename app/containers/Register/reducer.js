/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import { LOADING, ERROR, SET_INPUT, POST_SUCCESS } from './constants';

const initialState = fromJS({
  loading: false,
  success: false,
  error: false,
  input: {
    cv_link: '',
    phone: '',
    line: '',
    email: '',
    sectionOne: '',
    reasonOne: '',
    sectionTwo: '',
    reasonTwo: '',
  },
});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return state.set('loading', true);
    case ERROR:
      return state
        .set('loading', false)
        .set('success', false)
        .set('error', true);
    case SET_INPUT:
      return state.setIn(['input', action.payload.field], action.payload.value);
    case POST_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('success', true);
    default:
      return state;
  }
}

export default registerReducer;
