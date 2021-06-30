/** @format */

import { TStore } from '../../declarations/store';
import {
  AT_USER_LOGIN_FAILURE,
  AT_USER_LOGIN_REQUEST,
  AT_USER_LOGIN_SUCCESS,
  AT_USER_LOGOUT_REQUEST,
  AT_USER_LOGOUT_SUCCESS,
} from './constants';

export const actionUserLoginRequest = (payload: boolean) => ({
  type: AT_USER_LOGIN_REQUEST,
  payload,
});
export const actionUserLoginSuccess = (payload: TStore['auth']) => ({
  type: AT_USER_LOGIN_SUCCESS,
  payload,
});
export const actionUserLoginFailure = (error: Error) => ({
  type: AT_USER_LOGIN_FAILURE,
  payload: error,
});
export const actionUserLogoutRequest = (payload: boolean) => ({
  type: AT_USER_LOGOUT_REQUEST,
  payload,
});
export const actionUserLogoutSuccess = (payload: TStore['auth']) => ({
  type: AT_USER_LOGOUT_SUCCESS,
  payload,
});
