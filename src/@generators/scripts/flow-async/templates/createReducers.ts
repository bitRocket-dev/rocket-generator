/** @format */

import { splitString } from './splitStringUtility';

export const createReducers = (name: string): string => {
  const names = splitString(name);
  const formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);
  return `/** @format */

export const reducer${formattedName} = (
  prevStore: any = {},
  action: any,
): any => {
  switch (action.type) {

    return prevStore
    default:
      break;
  }
  return prevStore;
};`;
};
