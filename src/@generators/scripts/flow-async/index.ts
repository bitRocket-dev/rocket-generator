/** @format */

import { pathExists, mkdirs, writeFile, writeFileSync } from 'fs-extra';
import { createSagas } from './templates/createSagas';
import { createActions } from './templates/createActions';
import { createConstants } from './templates/createConstants';
import { createDeclarations } from './templates/createDeclarations';
import { createApi } from './templates/createApi';
import { createReducers } from './templates/createReducers';
import { createWatcher } from './templates/createWatcher';
import { splitString } from './templates/splitStringUtility';
import { addReducerToStore } from '../utils/addReducerToStore';
import { addReducerToCombineReducers } from '../utils/addReducerToCombineReducers';
import { addWatcherToReduxFlow } from '../utils/addWatcherToReduxFlow';

export const reduxFlow = async (name: string, reducer: string, type: string): Promise<void> => {
  const [operation, nameOp] = splitString(name);

  if (!nameOp) throw new Error('You must include a component name.');
  const nameUpper = nameOp.charAt(0).toUpperCase() + nameOp.slice(1);
  const dirPath = `./src/@sdk/redux-modules/${nameUpper}/${operation.toLowerCase()}`;

  if (!(await pathExists(dirPath))) {
    await mkdirs(dirPath);
    writeFile(`${dirPath}/sagas.ts`, createSagas(nameOp, operation), writeFileErrorHandler);
    writeFile(`${dirPath}/actions.ts`, createActions(nameOp, operation), writeFileErrorHandler);
    writeFile(`${dirPath}/constants.ts`, createConstants(nameOp, operation), writeFileErrorHandler);
    writeFile(`${dirPath}/declarations.ts`, createDeclarations(nameOp), writeFileErrorHandler);
    writeFile(`${dirPath}/api.ts`, createApi(nameOp, operation), writeFileErrorHandler);
    writeFile(`${dirPath}/watcher.ts`, createWatcher(nameOp, operation), writeFileErrorHandler);
  }

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  if (reducer === 'yes') {
    writeFileSync(`${dirPath}/reducers.ts`, createReducers(name));
    addWatcherToReduxFlow(nameOp, operation);
    addReducerToCombineReducers(nameOp, type, operation.toLowerCase());
    addReducerToStore(nameOp);
  }
};
