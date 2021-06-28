/** @format */

import { pathExists, readFileSync, writeFile, mkdirs } from 'fs-extra';
import { createConstants } from './templates/createConstants';
import { createDeclarations } from './templates/createDeclarations';
import { createReducers } from './templates/createReducers';
import { createActions } from './templates/createActions';

export const reduxSyncFlow = async (name: string, choices: string[], reducer: string): Promise<void> => {
  const dir = `./src/@sdk/redux-modules/${name}`;
  const reducerDir = `./src/@sdk/redux-modules/reducers.ts`;
  const nameUpperOne = name.charAt(0).toUpperCase() + name.slice(1);

  if (await pathExists(reducerDir)) {
    const data = readFileSync(reducerDir).toString().split('\n');
    data.splice(4, 0, `import {reducer${nameUpperOne}} from './${name}/reducer'`);
    data.splice(data.length - 2, 0, `${name}:reducer${nameUpperOne},`);
    const text = data.join('\n');
    writeFile(`${reducerDir}`, text, function (err) {
      if (err) return console.log(err);
    });
  }

  function writeFileErrorHandler(err: Error) {
    if (err) throw err;
  }
  writeFile(`${dir}/actions.ts`, createActions(name, choices), writeFileErrorHandler);
  writeFile(`${dir}/constants.ts`, createConstants(name, choices), writeFileErrorHandler);
  writeFile(`${dir}/declarations.ts`, createDeclarations(name), writeFileErrorHandler);

  if (reducer === 'yes') writeFile(`${dir}/reducer.ts`, createReducers(name, choices), writeFileErrorHandler);
};
