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
