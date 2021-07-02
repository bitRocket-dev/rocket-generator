/** @format */

import { mkdirs, pathExists, writeFile } from 'fs-extra';
import { createConstants } from './templates/createConstants';
import { createDeclarations } from './templates/createDeclarations';
import { createReducers } from './templates/createReducers';
import { addActionToExisting } from '../utils/addActionToExisting';
import { createActions } from '../flow-sync/templates/createActions';
import { addReducerToStore } from '../utils/addReducerToStore';
import { addReducerToCombineReducers } from '../utils/addReducerToCombineReducers/';
import { addConstantsToExisting } from '../utils/addConstantstoExisting';
import { addReducerToExisting } from '../utils/addReducerToExisting';
export const reduxSyncFlow = async (name: string, choices: string[], reducer: string): Promise<void> => {
  const dir = `./src/@sdk/redux-modules/${name}`;
  const reducerPath = `./src/@sdk/redux-modules/${name}/reducer.ts`;

  function writeFileErrorHandler(err: Error) {
    if (err) throw err;
  }

  if (await pathExists(dir)) {
    await addActionToExisting(name, choices);
    addConstantsToExisting(name, choices);
    addReducerToExisting(name, choices);
  } else {
    await mkdirs(dir);
    writeFile(`${dir}/actions.ts`, createActions(name, choices), writeFileErrorHandler);
    writeFile(`${dir}/constants.ts`, createConstants(name, choices), writeFileErrorHandler);
    writeFile(`${dir}/declarations.ts`, createDeclarations(name), writeFileErrorHandler);
  }

  if (reducer === 'yes') {
    if (!(await pathExists(reducerPath))) {
      writeFile(`${dir}/reducer.ts`, createReducers(name, choices), writeFileErrorHandler);
      addReducerToStore(name);
      addReducerToCombineReducers(name);
    }
  }
};
