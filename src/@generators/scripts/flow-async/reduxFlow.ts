/** @format */

import { pathExists, mkdirs, writeFile } from 'fs-extra';
import { sagas } from './templates/sagas';
import { actions } from './templates/actions';
import { constants } from './templates/constants';
import { declarations } from './templates/declarations';
import { api } from './templates/api';
import { reducers } from './templates/reducers';
import { splitString } from './templates/splitStringUtility';

export const reduxFlow = async (name, reducer) => {
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
    writeFile(`${dir2}/sagas.tsx`, sagas(name), writeFileErrorHandler);
    writeFile(`${dir2}/actions.tsx`, actions(name), writeFileErrorHandler);
    writeFile(`${dir2}/constants.tsx`, constants(name), writeFileErrorHandler);
    writeFile(`${dir2}/declarations.tsx`, declarations(name), writeFileErrorHandler);
    writeFile(`${dir2}/api.tsx`, api(name), writeFileErrorHandler);
  } else {
    writeFile(`${dirSync}/actions.tsx`, actions(name), writeFileErrorHandler);
    writeFile(`${dirSync}/constants.tsx`, constants(name), writeFileErrorHandler);
    writeFile(`${dirSync}/declarations.tsx`, declarations(name), writeFileErrorHandler);
  }

  if (reducer === 'yes') {
    if (names[0] !== 'Sync') writeFile(`${dir2}/reducers.tsx`, reducers(name), writeFileErrorHandler);
    else writeFile(`${dirSync}/reducers.tsx`, reducers(name), writeFileErrorHandler);
  }
};
