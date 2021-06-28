/** @format */

import { splitString } from './splitStringUtility';

export const createConstants = (name: string): string => {
  const names = splitString(name);
  const nameActionOperationType = names[0].toUpperCase();
  const nameActionOperationLog = names[0].charAt(0).toUpperCase() + names[0].slice(1);
  const nameActionType = names[1].toUpperCase();
  const nameActionLog = names[1].charAt(0).toUpperCase() + names[1].slice(1);

  return `
export const AT_${nameActionType}_${nameActionOperationType}_REQUEST = '[Action] - ${nameActionLog} ${nameActionOperationLog} Request';
export const AT_${nameActionType}_${nameActionOperationType}_SUCCESS = '[Event] - ${nameActionLog} ${nameActionOperationLog} Success';
export const AT_${nameActionType}_${nameActionOperationType}_FAILURE = '[Event] - ${nameActionLog} ${nameActionOperationLog} Failure';  
  `;
};
