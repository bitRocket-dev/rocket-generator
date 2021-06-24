/** @format */

import { splitString } from './splitStringUtility';

export const reducers = name => {
  const names = splitString(name);
  const formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);
  return `
import { TStore } from "../../../declarations/store";
import { TAction } from "../../../declarations/actions";

export const reducer${formattedName} = (
  prevStore: TStore['${names[1]}'] = {},
  action: TAction,
): TStore['${names[1]}'] => {
  switch (action.type) {
    default:
      break;
  }
  return prevStore;
};`;
};
