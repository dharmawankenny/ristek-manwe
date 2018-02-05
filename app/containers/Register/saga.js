import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { take, call, select, cancel, fork, put } from 'redux-saga/effects';
// import { isEmpty, isEqual } from 'lodash';
import request from 'utils/request';

import { API_BASE, API_SECTIONS, API_USER_PROFILE } from 'global-constants';

import selectGlobal from 'global-selectors';

import { loading, loadingDone, loadingErr, setUser } from 'global-actions';

import selectSignUpForm from './selectors';
import { FETCH_INITIAL, POST } from './constants';
import { fetchInitialDone, changeInput } from './actions';

export function* fetchSection(action) {
  yield put(loading());
  const globalState = yield select(selectGlobal());
  let token = globalState.user.token;

  if (token === '' || token === null || token === undefined) {
    token = action.token;
  }

  const requestURL = `${API_BASE}${API_SECTIONS}`;
  const auth = `JWT ${token}`;

  const fetchSectionCall = yield call(request, requestURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  });

  if (!fetchSectionCall.err) {
    yield put(fetchInitialDone(fetchSectionCall.data));
    yield put(loadingDone());
  } else {
    yield put(loadingErr());
  }
}

export function* fetchSectionSaga() {
  yield takeLatest(FETCH_INITIAL, fetchSection);
}

export function* postData() {
  yield put(loading());
  const globalState = yield select(selectGlobal());
  const localState = yield select(selectSignUpForm());
  const token = globalState.user.token;

  const requestBody = {
    user: {
      id: globalState.user.user_id,
      username: globalState.user.username,
    },
    name: globalState.user.name,
    email: localState.input.email,
    phone_number: localState.input.phone,
    line: localState.input.line,
  };

  const requestURL = `${API_BASE}${API_USER_PROFILE}`;
  const auth = `JWT ${token}`;

  const postCall = yield call(request, requestURL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth,
    },
    body: JSON.stringify(requestBody),
  });

  if (!postCall.err) {
    const newUser = globalState.user;
    newUser.user_profile = postCall.data;
    yield put(setUserProfile(newUser));

    // set cookies
    const d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `user_oprec_ristek=${JSON.stringify(
      newUser
    )};expires=${expires};path=[ristek.cs.ui.ac.id/oprec]`;
    yield put(loadingDone());
    yield put(push('/oprec/dashboard'));
  } else {
    yield put(loadingErr());
  }
}

export function* postDataSaga() {
  yield takeLatest(POST, postData);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* signUpSaga() {
  // Fork watcher so we can continue execution
  const fetchSectionWatcher = yield fork(fetchSectionSaga);
  const postDataWatcher = yield fork(postDataSaga);
  yield take(LOCATION_CHANGE);
  yield cancel(fetchSectionWatcher);
  yield cancel(postDataWatcher);
}
