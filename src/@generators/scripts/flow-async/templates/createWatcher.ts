/** @format */

export const createWatcher = (name: string, operation: string) => {
  const nameUpperOne = name.charAt(0).toUpperCase() + name.slice(1);
  const nameActionType = name.toUpperCase();
  const nameActionOperationType = operation.toUpperCase();
  const formattedOperation = operation.charAt(0).toUpperCase() + operation.slice(1);
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return `/** @format */

import { takeLatest } from 'redux-saga/effects';
import { saga${formattedName}${formattedOperation} } from './${operation.toLowerCase()}/sagas'
import { AT_${nameActionType}_${nameActionOperationType}_REQUEST } from './${operation.toLowerCase()}/constants'

export function* watcher${nameUpperOne}():Generator {
yield takeLatest(AT_${nameActionType}_${nameActionOperationType}_REQUEST, saga${formattedName}${formattedOperation})
}
  `;
};
