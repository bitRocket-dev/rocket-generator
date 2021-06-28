/** @format */

import { pathExists, mkdirs, unlinkSync, writeFile } from 'fs-extra';
import { component, test } from './templates';
import { utilityCapitalizeFirst } from '../../utilities';

export const componentView = async name => {
  if (!name) console.error(`\x1b[31m`, 'Insert a name valid!');

  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-view/${formattedName}`;
  const path = `./src/components-view/.gitkeep`;

  if (await pathExists(dir)) console.error(`\x1b[31m`, 'A component with that name already exists.');

  await mkdirs(dir);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  pathExists(path, (err, exists) => {
    if (exists) unlinkSync(path);
  });

  writeFile(`${dir}/index.tsx`, component(formattedName), writeFileErrorHandler);
  writeFile(`${dir}/${formattedName}.spec.js`, test(formattedName), writeFileErrorHandler);
};
