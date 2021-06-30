/** @format */

import { pathExists, mkdirs, writeFile } from 'fs-extra';
import { createSagas } from './templates/createSagas';
import { createActions } from './templates/createActions';
import { createConstants } from './templates/createConstants';
import { createDeclarations } from './templates/createDeclarations';
import { createApi } from './templates/createApi';
import { createReducers } from './templates/createReducers';
import { splitString } from './templates/splitStringUtility';
import { addReducerToStore } from '../utils/addReducerToStore';
import { addReducerToCombineReducers } from '../utils/addReducerToCombineReducers';
import { writeFileSync } from 'fs';

export const reduxFlow = async (name: string, reducer: string, type: string): Promise<void> => {
  const [operation, nameOp] = splitString(name);

  if (!nameOp) throw new Error('You must include a component name.');
  const nameUpper = nameOp.charAt(0).toUpperCase() + nameOp.slice(1);
  const dirPath = `./src/@sdk/redux-modules/${nameUpper}`;
  const dirFile = `${dirPath}/${operation.toLocaleLowerCase()}`;

  if (await pathExists(dirPath)) {
    await mkdirs(dirFile);
  } else {
    await mkdirs(dirPath);
    await mkdirs(dirFile);
  }

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  writeFile(`${dirFile}/sagas.ts`, createSagas(name), writeFileErrorHandler);
  writeFile(`${dirFile}/actions.ts`, createActions(name), writeFileErrorHandler);
  writeFile(`${dirFile}/constants.ts`, createConstants(name), writeFileErrorHandler);
  writeFile(`${dirFile}/declarations.ts`, createDeclarations(name), writeFileErrorHandler);
  writeFile(`${dirFile}/api.ts`, createApi(name), writeFileErrorHandler);

  if (reducer === 'yes') {
    writeFileSync(`${dirFile}/reducers.ts`, createReducers(name));
    addReducerToCombineReducers(nameOp, type, operation.toLowerCase());
    addReducerToStore(nameOp);
  }
};
