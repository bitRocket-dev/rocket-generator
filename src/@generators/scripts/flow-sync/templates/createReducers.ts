/** @format */
// prettier-ignore
export const createReducers = (name: string, choices: string[]): string => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  return `/** @format */
// NOTE: formattazione obbligatoria, per utilizzo rocket-generator
// prettier-ignore 

import {
${choices.map(operation => `AT_${name.toUpperCase()}_${operation.toUpperCase()},\n`).join('')}} from './constants'
      
export const reducer${formattedName} = (prevStore: any = {}, action: any): any => {
  switch (action.type) {${choices.map(operation => `
    case AT_${name.toUpperCase()}_${operation.toUpperCase()}:\r`).join('')}
      return prevStore
    default:
      break;
  }
  return prevStore;
};`;
};
