/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import { LOADING, ERROR, SET_INPUT, FETCH_INITIAL_DONE, POST_SUCCESS } from './constants';

const initialState = fromJS({
  loading: false,
  success: false,
  error: false,
  input: {
    cv_link: '',
    email: '',
    phone: '',
    line: '',
    first_section: '',
    first_section_reason: '',
    second_section: '',
    second_section_reason: '',
  },
  sections: [
    {
      id: -1,
      name: 'Default Options',
      status: true,
      update_at: '2017-01-14T15:18:31.579116Z',
      create_at: '2017-01-14T15:18:31.579201Z',
    },
  ],
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
    case FETCH_INITIAL_DONE:
      return state
        .set('sections', fromJS(action.payload))
        .set('loading', false)
        .set('error', false)
        .set('success', true);
    default:
      return state;
  }
}

export default registerReducer;
