import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { take, call, select, cancel, fork, put } from 'redux-saga/effects';
// import { isEmpty, isEqual } from 'lodash';
import request from 'utils/request';

import {
  API_BASE,
  // API_SECTIONS,
  API_SUBMISSIONS,
  // API_USER_PROFILE,
} from 'global-constants';

import selectGlobal from 'global-selectors';
// import selectDashboard from './selectors';

import {
  loading,
  success,
  error,
  setUser,
  editFlashMessage,
} from 'global-actions';

import { SUBMIT_TASK } from './constants';

export function* submitTask(action) {
  yield put(loading());
  const globalState = yield select(selectGlobal());
  const token = globalState.user.token;

  const requestURL = `${API_BASE}${API_SUBMISSIONS}`;
  const auth = `JWT ${token}`;

  const { payload } = action;

  const data = {
    ...payload,
    user_profile: globalState.user.user_profile.id,
  };

  // call file upload to API
  const submitCall = yield call(request, requestURL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth,
    },
    body: JSON.stringify(data),
  });

  if (!submitCall.err) {
    const newUser = globalState.user;
    newUser.user_profile.submissions.push(submitCall.data);
    yield put(setUser(newUser));

    // set cookies
    window.localStorage.setItem('user_oprec_ristek', JSON.stringify(newUser));
    yield put(editFlashMessage('Submission has been uploaded'));
    yield put(success());
  } else if (submitCall.err.response.status === 403) {
    yield put(editFlashMessage('Submission failed, deadline overdue'));
    yield put(success());
  } else {
    yield put(error());
  }
}

export function* submitTaskSaga() {
  yield takeLatest(SUBMIT_TASK, submitTask);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* dashboardSaga() {
  // Fork watcher so we can continue execution
  const submitTaskWatcher = yield fork(submitTaskSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(submitTaskWatcher);
}
