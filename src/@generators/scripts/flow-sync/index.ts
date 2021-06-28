/** @format */

import { pathExists, readFileSync, writeFile, mkdirs } from 'fs-extra';
import { scriptImport } from './scriptImport';
import { scriptBody } from './scriptBody';
import { createActions } from './templates/createActions';
import { createConstants } from './templates/createConstants';
import { createDeclarations } from './templates/createDeclarations';
import { createReducers } from './templates/createReducers';

export const reduxSyncFlow = async (name: string, choices: string[], reducer: string): Promise<void> => {
  const dir = `./src/@sdk/redux-modules/${name}`;
  const dir2 = `./src/@sdk/redux-modules/${name}/actions.ts`;

  if (await pathExists(dir2)) {
    await scriptBody(name, choices);

    const data = readFileSync(dir2).toString().split('\n');

    const str = await scriptImport(name, choices);
    console.log(str);
    if (!str.includes(undefined)) {
      str.map((item: string) => {
        data.splice(4, 0, item);
        const text = data.join('\n');
        writeFile(`${dir2}`, text, function (err) {
          if (err) return console.log(err);
        });
      });
    }
  } else {
    await mkdirs(dir);
    writeFile(`${dir}/actions.ts`, createActions(name, choices), writeFileErrorHandler);
  }

  function writeFileErrorHandler(err: Error) {
    if (err) throw err;
  }

  writeFile(`${dir}/constants.ts`, createConstants(name, choices), writeFileErrorHandler);
  writeFile(`${dir}/declarations.ts`, createDeclarations(name), writeFileErrorHandler);

  if (reducer === 'yes') writeFile(`${dir}/reducers.ts`, createReducers(name, choices), writeFileErrorHandler);
};
