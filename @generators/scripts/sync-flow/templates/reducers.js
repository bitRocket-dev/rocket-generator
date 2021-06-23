/** @format */

exports.reducers = (name, choices) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  return `
import { TStore } from "../../../declarations/store";
import { TAction } from "../../../declarations/actions";

export const reducer${formattedName} = (
  prevStore: TStore['${name}'] = {},
  action: TAction,
): TStore['${name}'] => {
  switch (action.type) {
    ${choices.map((operation) => `case "${operation}":\n`).join("")}
    default:
      break;
  }
  return prevStore;
};`;
};
