import {
  call,
  put,
  // select,
  takeLatest,
} from 'redux-saga/effects';

import { fetchServerTime } from 'services/api';

import { getServerTimeSuccess, error } from './global-actions';
import { GET_SERVER_TIME } from './global-constants';

/**
 * Github repos request/response handler
 */
export function* getServerTime() {
  try {
    // Call our request helper (see 'utils/request')
    const serverTime = yield call(fetchServerTime);
    yield put(getServerTimeSuccess(serverTime));
  } catch (err) {
    yield put(error());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* globalSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_SERVER_TIME, getServerTime);
}
