/** @format */

import { mkdirs, pathExists, writeFile } from 'fs-extra';
import { createConstants } from './templates/createConstants';
import { createDeclarations } from './templates/createDeclarations';
import { createReducers } from './templates/createReducers';
import { scriptActions } from '../flow-Actions';
import { createActions } from '../flow-sync/templates/createActions';

export const reduxSyncFlow = async (name: string, choices: string[], reducer: string): Promise<void> => {
  const dir = `./src/@sdk/redux-modules/${name}`;

  function writeFileErrorHandler(err: Error) {
    if (err) throw err;
  }

  if (await pathExists(dir)) {
    await scriptActions(name, choices);
  } else {
    await mkdirs(dir);
    writeFile(`${dir}/actions.ts`, createActions(name, choices), writeFileErrorHandler);
    writeFile(`${dir}/constants.ts`, createConstants(name, choices), writeFileErrorHandler);
    writeFile(`${dir}/declarations.ts`, createDeclarations(name), writeFileErrorHandler);
  }

  if (reducer === 'yes') writeFile(`${dir}/reducers.ts`, createReducers(name, choices), writeFileErrorHandler);
};
