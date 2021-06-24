/** @format */

import {existsSync, writeFile, mkdirsSync} from 'fs-extra';
import { sagas } from './templates/sagas';
import { actions } from './templates/actions';
import { constants } from './templates/constants';
import { api } from './templates/api';
import { declarations } from './templates/declarations';
import { reducers } from './templates/reducers';

const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/@ducks/${name}`;

if (existsSync(dir)) throw new Error('A component with that name already exists.');

mkdirsSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

writeFile(`${dir}/sagas.tsx`, sagas(name), writeFileErrorHandler);
writeFile(`${dir}/actions.tsx`, actions(name), writeFileErrorHandler);
writeFile(`${dir}/constants.tsx`, constants(name), writeFileErrorHandler);
writeFile(`${dir}/declarations.tsx`, declarations(name), writeFileErrorHandler);
writeFile(`${dir}/api.tsx`, api(name), writeFileErrorHandler);
writeFile(`${dir}/reducers.tsx`, reducers(name), writeFileErrorHandler);
