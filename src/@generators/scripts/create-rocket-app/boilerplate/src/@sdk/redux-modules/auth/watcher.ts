/** @format */

import { AT_USER_LOGIN_REQUEST, AT_USER_LOGOUT_REQUEST } from './constants';
import { takeLatest } from 'redux-saga/effects';
import { sagaUserLogin, sagaUserLogout } from './saga';

export function* watcherAuth(): Generator {
  yield takeLatest(AT_USER_LOGIN_REQUEST, sagaUserLogin);
  yield takeLatest(AT_USER_LOGOUT_REQUEST, sagaUserLogout);
}
