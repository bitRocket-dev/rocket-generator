/** @format */

import { appendFileSync, readFileSync } from 'fs-extra';
import { utilityCapitalizeFirst } from '../../../../utilities';

export const scriptBody = (name: string, choices: string[]): void => {
  const dir = `./src/@sdk/redux-modules/${name}/actions.ts`;
  const formattedName = utilityCapitalizeFirst(name);

  choices.map(item => {
    if (!readFileSync(dir).toString().includes(`action${formattedName}${item}`)) {
      appendFileSync(
        dir,
        `export const action${formattedName}${item}= (payload: any) => ({
  type: AT_${name.toUpperCase()}_${item.toUpperCase()},
  payload,
        });\r`,
      );
    }
  });
};
