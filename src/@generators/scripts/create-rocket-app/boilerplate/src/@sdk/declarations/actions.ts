/** @format */

import {
  actionUserLoginFailure,
  actionUserLoginRequest,
  actionUserLoginSuccess,
  actionUserLogoutRequest,
  actionUserLogoutSuccess,
} from '../redux-modules/auth/actions';

export type TAction =
  | ReturnType<typeof actionUserLoginRequest>
  | ReturnType<typeof actionUserLoginSuccess>
  | ReturnType<typeof actionUserLoginFailure>
  | ReturnType<typeof actionUserLogoutRequest>
  | ReturnType<typeof actionUserLogoutSuccess>;
