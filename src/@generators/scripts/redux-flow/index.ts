/** @format */

import fs from 'fs-extra';
import { sagas } from './templates/sagas';
import { actions } from './templates/actions';
import { constants } from './templates/constants';
import { api } from './templates/api';
import { declarations } from './templates/declarations';
import { reducers } from './templates/reducers';

const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/@ducks/${name}`;

if (fs.existsSync(dir)) throw new Error('A component with that name already exists.');

fs.mkdirsSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

fs.writeFile(`${dir}/sagas.tsx`, sagas(name), writeFileErrorHandler);
fs.writeFile(`${dir}/actions.tsx`, actions(name), writeFileErrorHandler);
fs.writeFile(`${dir}/constants.tsx`, constants(name), writeFileErrorHandler);
fs.writeFile(`${dir}/declarations.tsx`, declarations(name), writeFileErrorHandler);
fs.writeFile(`${dir}/api.tsx`, api(name), writeFileErrorHandler);
fs.writeFile(`${dir}/reducers.tsx`, reducers(name), writeFileErrorHandler);
