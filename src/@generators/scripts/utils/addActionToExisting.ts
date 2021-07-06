/** @format */

import { writeFileSync } from 'fs';
import { appendFileSync, readFileSync, pathExists } from 'fs-extra';
import { utilityCapitalizeFirst } from '../../utilities';

//#region ::: PARTIALS

export const addActionToExisting = async (name: string, choices: string[]) => {
  const formattedName = utilityCapitalizeFirst(name);
  const nameActionTypeUpper = name.toUpperCase();
  const dir = `./src/@sdk/redux-modules/${name}/actions.ts`;
  const nameUpper = name.toUpperCase();

  if (await pathExists(dir)) {
    choices.map(item => {
      if (!readFileSync(dir).toString().includes(`AT_${nameActionTypeUpper}_${item.toUpperCase()}`)) {
        const data = readFileSync(dir).toString().split('\n');

        data.splice(4, 0, `  AT_${nameUpper}_${item.toUpperCase()},`);
        const text = data.join('\n');
        writeFileSync(`${dir}`, text);

        appendFileSync(
          dir,
          `export const action${formattedName}${item} = (payload: any) => ({
  type: AT_${name.toUpperCase()}_${item.toUpperCase()},
  payload,
});\r`,
        );
      }
    });
  }
};
