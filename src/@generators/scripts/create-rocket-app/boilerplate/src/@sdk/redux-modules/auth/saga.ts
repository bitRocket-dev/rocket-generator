/** @format */

import { put } from '@redux-saga/core/effects';
import { actionUserLoginRequest } from './actions';
import { AT_USER_LOGIN_FAILURE, AT_USER_LOGIN_SUCCESS } from './constants';

export function* sagaUserLogin(action: ReturnType<typeof actionUserLoginRequest>): Generator {
  try {
    yield put({ type: AT_USER_LOGIN_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: AT_USER_LOGIN_FAILURE, payload: error });
  }
}
