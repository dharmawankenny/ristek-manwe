/*
 *
 * Register actions
 *
 */

import {
  DEFAULT_ACTION,
  LOADING,
  ERROR,
  SET_INPUT,
  POST,
  POST_SUCCESS,
  FETCH_INITIAL,
  FETCH_INITIAL_DONE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}

export function error() {
  return {
    type: ERROR,
  };
}

export function setInput(field, value) {
  return {
    type: SET_INPUT,
    payload: { field, value },
  };
}

export function post() {
  return {
    type: POST,
  };
}

export function postSuccess() {
  return {
    type: POST_SUCCESS,
  };
}

export function fetchInitial(token) {
  return {
    type: FETCH_INITIAL,
    token,
  };
}

export function fetchInitialDone(payload) {
  return {
    type: FETCH_INITIAL_DONE,
    payload,
  };
}
