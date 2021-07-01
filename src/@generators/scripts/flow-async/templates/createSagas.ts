/** @format */

export const createSagas = (name: string, operation: string): string => {
  const formattedOperation = operation.charAt(0).toUpperCase() + operation.slice(1);
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

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
