/** @format */

import { pathExists, mkdirs, writeFile } from 'fs-extra';
import { createSagas } from './templates/createSagas';
import { createActions } from './templates/createActions';
import { createConstants } from './templates/createConstants';
import { createDeclarations } from './templates/createDeclarations';
import { createApi } from './templates/createApi';
import { createReducers } from './templates/createReducers';
import { splitString } from './templates/splitStringUtility';
import { reduxScriptStore } from '../script-redux-flow/scriptStore';
import { reduxScriptReducers } from '../script-redux-flow/scriptReducer';

export const reduxFlow = async (name: string, reducer: string): Promise<void> => {
  const names = splitString(name);
  if (!names[1]) throw new Error('You must include a component name.');

  const nameUpper = names[1].charAt(0).toUpperCase() + names[1].slice(1);

  const dir = `./src/@sdk/redux-modules/${nameUpper}`;
  const dir2 = `${dir}/${names[0]}`;
  const dirSync = `./src/@sdk/redux-modules/${nameUpper}-Sync`;

  if (names[0] !== 'Sync') {
    if (await pathExists(dir)) {
      await mkdirs(dir2);
    } else {
      await mkdirs(dir);
      await mkdirs(dir2);
    }
  } else {
    await mkdirs(dirSync);
  }

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  if (names[0] !== 'Sync') {
    writeFile(`${dir2}/sagas.ts`, createSagas(name), writeFileErrorHandler);
    writeFile(`${dir2}/actions.ts`, createActions(name), writeFileErrorHandler);
    writeFile(`${dir2}/constants.ts`, createConstants(name), writeFileErrorHandler);
    writeFile(`${dir2}/declarations.ts`, createDeclarations(name), writeFileErrorHandler);
    writeFile(`${dir2}/api.ts`, createApi(name), writeFileErrorHandler);
  } else {
    writeFile(`${dirSync}/actions.ts`, createActions(name), writeFileErrorHandler);
    writeFile(`${dirSync}/constants.ts`, createConstants(name), writeFileErrorHandler);
    writeFile(`${dirSync}/declarations.ts`, createDeclarations(name), writeFileErrorHandler);
  }

  if (reducer === 'yes') {
    reduxScriptReducers(names[1]);
    if (names[0] !== 'Sync') writeFile(`${dir2}/reducers.ts`, createReducers(name), writeFileErrorHandler);
    else writeFile(`${dirSync}/reducers.ts`, createReducers(name), writeFileErrorHandler);
    reduxScriptStore(names[1]);
  }
};
