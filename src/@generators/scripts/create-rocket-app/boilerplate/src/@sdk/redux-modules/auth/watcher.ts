/** @format */

import { AT_USER_LOGIN_REQUEST } from './constants';
import { takeLatest } from 'redux-saga/effects';
import { sagaUserLogin } from './saga';

export function* watcherAuth(): Generator {
  yield takeLatest(AT_USER_LOGIN_REQUEST, sagaUserLogin);
}
