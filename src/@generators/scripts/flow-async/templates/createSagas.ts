/** @format */

import { splitString } from './splitStringUtility';

export const createSagas = (name: string): string => {
  const names = splitString(name);
  const formattedOperation = names[0].charAt(0).toUpperCase() + names[0].slice(1);
  const formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);

  return `
import { call, put } from 'redux-saga/effects';
import {
  api${formattedName}${formattedOperation},
} from "./api";
import {
  action${formattedName}${formattedOperation}Failure,
  action${formattedName}${formattedOperation}Request,
  action${formattedName}${formattedOperation}Success,
} from './actions';

export function* saga${formattedName}${formattedOperation}(action: ReturnType<typeof action${formattedName}${formattedOperation}Request>): Generator {
  try {
    const payload: any = yield call(api${formattedName}${formattedOperation}, action.payload);
    yield put(action${formattedName}${formattedOperation}Success(payload));
  } 
  catch (error) {
    yield put(action${formattedName}${formattedOperation}Failure(error));
  }
}`;
};
