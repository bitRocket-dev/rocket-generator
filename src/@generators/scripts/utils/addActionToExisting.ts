/** @format */

import { writeFileSync } from 'fs';
import { appendFileSync, readFileSync, pathExists, writeFile } from 'fs-extra';
import { utilityCapitalizeFirst } from '../../utilities';

//#region ::: PARTIALS
export const addActionImport = (name: string, choices: string[]): string[] => {
  const dir = `./src/@sdk/redux-modules/${name}/actions.ts`;
  const nameActionTypeUpper = name.toUpperCase();
  let content = [];
  const chomap = choices.map((item, index) => {
    if (readFileSync(dir).toString().includes(`AT_${nameActionTypeUpper}_${item.toUpperCase()},`))
      console.log(`ERROR! ${name.toUpperCase()}-${item} already exist!`);
    else content.push(`AT_${nameActionTypeUpper}_${item.toUpperCase()},`);

    return content[index];
  });
  return chomap;
};

export const addActionFunc = (name: string, choices: string[]): void => {
  const nameActionTypeUpper = name.toUpperCase();
  const dir = `./src/@sdk/redux-modules/${name}/actions.ts`;
  const formattedName = utilityCapitalizeFirst(name);

  choices.map(item => {
    if (!readFileSync(dir).toString().includes(`type: AT_${nameActionTypeUpper}_${item.toUpperCase()},`)) {
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
//#endregion

export const addActionToExisting = async (name: string, choices: string[]) => {
  const dir2 = `./src/@sdk/redux-modules/${name}/actions.ts`;

  if (await pathExists(dir2)) {
    const data = readFileSync(dir2).toString().split('\n');
    const str = addActionImport(name, choices);
    if (!str.includes(undefined)) {
      str.map((item: string) => {
        data.splice(4, 0, item);
        const text = data.join('\n');
        writeFileSync(`${dir2}`, text);
      });
    }
    addActionFunc(name, choices);
  }
};
