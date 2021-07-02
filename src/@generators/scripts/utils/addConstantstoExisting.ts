/** @format */

import { readFileSync, appendFileSync } from 'fs-extra';

export const addConstantsToExisting = (name: string, choices: string[]): void => {
  const nameActionType = name.toUpperCase();
  const nameActionLog = name.charAt(0).toUpperCase() + name.slice(1);
  const dir = `./src/@sdk/redux-modules/${name}/constants.ts`;
  const dirConstants = `./src/@sdk/redux-modules/${name}/constants.ts`;

  `${choices
    .map(operation => {
      let text = `export const AT_${nameActionType}_${operation.toUpperCase()}: '[Action] - ${nameActionLog} ${
        operation.charAt(0).toUpperCase() + operation.slice(1)
      }' = '[Action] - ${nameActionLog} ${operation.charAt(0).toUpperCase() + operation.slice(1)}';\n`;
      if (!readFileSync(dirConstants).toString().includes(`AT_${nameActionType}_${operation.toUpperCase()}`))
        appendFileSync(dir, text);
    })
    .join('')}
  `;
};
