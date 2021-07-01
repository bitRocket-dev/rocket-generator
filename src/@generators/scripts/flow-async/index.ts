/** @format */

import { pathExists, mkdirs, writeFile, writeFileSync, readFileSync, pathExistsSync } from 'fs-extra';
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
import { addWatcherToReduxFlow } from '../utils/addWatcherToReduxFlow/addWatcherGeneric';
import { addWatcherSingle } from '../utils/addWatcherToReduxFlow/addWatcherSingle';

export const reduxFlow = async (name: string, reducer: string, type: string): Promise<void> => {
  const [operation, flowName] = splitString(name);
  if (!flowName) throw new Error('You must include a component name.');
  const nameUpper = flowName.charAt(0).toUpperCase() + flowName.slice(1);
  const dirPath = `./src/@sdk/redux-modules/${nameUpper}/${operation.toLowerCase()}`;
  const dirWatcher = `./src/@sdk/redux-modules/${nameUpper}`;
  const dirNewWatcher = `${dirWatcher}/watcher.ts`;

  if (!(await pathExists(dirPath))) {
    await mkdirs(dirPath);
    writeFile(`${dirPath}/sagas.ts`, createSagas(flowName, operation), writeFileErrorHandler);
    writeFile(`${dirPath}/actions.ts`, createActions(flowName, operation), writeFileErrorHandler);
    writeFile(`${dirPath}/constants.ts`, createConstants(flowName, operation), writeFileErrorHandler);
    writeFile(`${dirPath}/declarations.ts`, createDeclarations(flowName), writeFileErrorHandler);
    writeFile(`${dirPath}/api.ts`, createApi(flowName, operation), writeFileErrorHandler);
    if (!pathExistsSync(dirNewWatcher)) writeFileSync(`${dirWatcher}/watcher.ts`, createWatcher(flowName, operation));
  }

  addWatcherSingle(flowName, operation);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  if (reducer === 'yes') {
    writeFileSync(`${dirPath}/reducers.ts`, createReducers(name));
    addWatcherToReduxFlow(flowName, operation);
    addReducerToCombineReducers(flowName, type, operation.toLowerCase());
    addReducerToStore(flowName);
  }
};
