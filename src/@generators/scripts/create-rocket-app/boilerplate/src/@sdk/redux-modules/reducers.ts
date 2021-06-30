/** @format */

import { combineReducers } from 'redux';
import { reducerAuth } from './auth/reducers';

export const reducers = combineReducers({
  auth: reducerAuth,
});
