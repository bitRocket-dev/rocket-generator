/** @format */

import { pathExists, readFileSync, writeFileSync } from 'fs-extra';
export const addReducerToExisting = async (name: string, choices: string[]) => {
  const nameUpper = name.toUpperCase();
  const dir = `./src/@sdk/redux-modules/${name}/reducer.ts`;
  `${choices
    .map(async operation => {
      if (await pathExists(dir)) {
        const data = readFileSync(dir).toString().split('\n');
        if (!readFileSync(dir).toString().includes(`AT_${nameUpper}_${operation.toUpperCase()}`)) {
          data.splice(5, 0, `AT_${nameUpper}_${operation.toUpperCase()},`);
          data.splice(data.length - 7, 0, `    case AT_${nameUpper}_${operation.toUpperCase()}:`);
          const text = data.join('\n');
          writeFileSync(dir, text);
        }
      }
    })
    .join('')}`;
};
