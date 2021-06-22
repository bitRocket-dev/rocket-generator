/** @format */

const { splitString } = require("./splitStringUtility");

exports.reducers = (name) => {
  const names = splitString(name);
  const formattedName = names[0].charAt(0).toUpperCase() + names[0].slice(1);
  return `
import { TStore } from "../../../declarations/store";
import { TAction } from "../../../declarations/actions";

export const reducer${formattedName} = (
  prevStore: TStore['${names[0]}'] = {},
  action: TAction,
): TStore['${names[0]}'] => {
  switch (action.type) {
    default:
      break;
  }
  return prevStore;
};`;
};
