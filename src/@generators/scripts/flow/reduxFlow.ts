/** @format */

const fs = require('fs-extra');
const { sagas } = require('./templates/sagas');
const { actions } = require('./templates/actions');
const { constants } = require('./templates/constants');
const { declarations } = require('./templates/declarations');
const { api } = require('./templates/api');
const { reducers } = require('./templates/reducers');
const { splitString } = require('./templates/splitStringUtility');

async function reduxFlow(name, reducer) {
  const names = splitString(name);
  if (!names[1]) throw new Error('You must include a component name.');

  const nameUpper = names[1].charAt(0).toUpperCase() + names[1].slice(1);

  const dir = `./src/@sdk/redux-modules/${nameUpper}`;
  const dir2 = `${dir}/${names[0]}`;
  const dirSync = `./src/@sdk/redux-modules/${nameUpper}-Sync`;

  if (names[0] !== 'Sync') {
    if (await fs.pathExists(dir)) {
      await fs.mkdirs(dir2);
    } else {
      await fs.mkdirs(dir);
      await fs.mkdirs(dir2);
    }
  } else {
    await fs.mkdirs(dirSync);
  }

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  if (names[0] !== 'Sync') {
    fs.writeFile(`${dir2}/sagas.tsx`, sagas(name), writeFileErrorHandler);
    fs.writeFile(`${dir2}/actions.tsx`, actions(name), writeFileErrorHandler);
    fs.writeFile(`${dir2}/constants.tsx`, constants(name), writeFileErrorHandler);
    fs.writeFile(`${dir2}/declarations.tsx`, declarations(name), writeFileErrorHandler);
    fs.writeFile(`${dir2}/api.tsx`, api(name), writeFileErrorHandler);
  } else {
    fs.writeFile(`${dirSync}/actions.tsx`, actions(name), writeFileErrorHandler);
    fs.writeFile(`${dirSync}/constants.tsx`, constants(name), writeFileErrorHandler);
    fs.writeFile(`${dirSync}/declarations.tsx`, declarations(name), writeFileErrorHandler);
  }

  if (reducer === 'yes') {
    if (names[0] !== 'Sync') fs.writeFile(`${dir2}/reducers.tsx`, reducers(name), writeFileErrorHandler);
    else fs.writeFile(`${dirSync}/reducers.tsx`, reducers(name), writeFileErrorHandler);
  }
}

module.exports = reduxFlow;
