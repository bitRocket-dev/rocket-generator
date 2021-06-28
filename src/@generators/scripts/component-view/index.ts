/** @format */

import { pathExists, mkdirs, unlinkSync, writeFile } from 'fs-extra';
import { utilityCapitalizeFirst } from '../../utilities';
import { createComponent } from './templates/createComponent';
import { createTest } from './templates/createTest';

export const createComponentView = async (name: string): Promise<void> => {
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

  writeFile(`${dir}/index.tsx`, createComponent(formattedName), writeFileErrorHandler);
  writeFile(`${dir}/${formattedName}.spec.js`, createTest(formattedName), writeFileErrorHandler);
};
