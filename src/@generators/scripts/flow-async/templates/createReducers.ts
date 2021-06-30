/** @format */

import { splitString } from './splitStringUtility';

export const createReducers = (name: string): string => {
  const names = splitString(name);
  const formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);
  const nameOperationTypeUpper = names[0].toUpperCase();
  const nameActionTypeUpper = names[1].toUpperCase();
  return `/** @format */
import {
  AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_REQUEST,
  AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_SUCCESS,
  AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_FAILURE,
} from './constants';

export const reducer${formattedName} = (
  prevStore: any = {},
  action: any,
): any => {
  switch (action.type) {
    case AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_REQUEST:
      break;
    case AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_SUCCESS:
      break;
    case AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_FAILURE:
      break;
    default:
      break;
  }
  return prevStore;
};`;
};
