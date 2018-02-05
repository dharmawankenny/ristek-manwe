/*
 *
 * Dashboard actions
 *
 */

import { DEFAULT_ACTION, CHANGE_FILE_INPUT, SUBMIT_TASK } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeFileInput(submissionTarget) {
  return {
    type: CHANGE_FILE_INPUT,
    payload: {
      submissionTarget,
    },
  };
}

export function submitTask(submissionTarget) {
  return {
    type: SUBMIT_TASK,
    payload: {
      submissionTarget,
    },
  };
}
