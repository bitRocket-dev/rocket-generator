/** @format */

import { TAction } from '../../declarations/actions';
import { TStore } from '../../declarations/store';
import { AT_USER_LOGIN_SUCCESS, AT_USER_LOGOUT_SUCCESS } from './constants';

export const reducerAuth = (prevStore: boolean = false, action: TAction): TStore['auth'] => {
  switch (action.type) {
    case AT_USER_LOGIN_SUCCESS:
      return action.payload;
    case AT_USER_LOGOUT_SUCCESS:
      return action.payload;
  }
  return prevStore;
};
