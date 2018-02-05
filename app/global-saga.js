import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { take, call, cancel, fork, put } from 'redux-saga/effects';
// import { isEmpty, isEqual } from 'lodash';
import request from 'utils/request';

import { API_BASE, API_DATE_TIME, LOAD_SERVER_TIME } from './global-constants';

import {
  loading,
  loadingDone,
  loadingErr,
  loadServerTimeSuccess,
} from './global-actions';

export function* fetchServerTime() {
  yield put(loading());

  const requestURL = `${API_BASE}${API_DATE_TIME}`;

  const fetchServerTimeCall = yield call(request, requestURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!fetchServerTimeCall.err) {
    const splitDateTime = fetchServerTimeCall.data.datetime.split(' ');
    const splitDate = splitDateTime[0].split('-');
    const splitTime = splitDateTime[1].split(':');

    yield put(
      loadServerTimeSuccess({
        year: parseInt(splitDate[0], 10),
        month: parseInt(splitDate[1], 10) - 1,
        day: parseInt(splitDate[2], 10),
        hour: parseInt(splitTime[0], 10),
        minute: parseInt(splitTime[1], 10),
        second: parseInt(splitTime[2], 10),
      })
    );
    yield put(loadingDone());
  } else {
    yield put(loadingErr());
  }
}

export function* fetchServerTimeSaga() {
  yield takeLatest(LOAD_SERVER_TIME, fetchServerTime);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* globalSagas() {
  // Fork watcher so we can continue execution
  const fetchServerTimeWatcher = yield fork(fetchServerTimeSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchServerTimeWatcher);
}
