/** @format */

import { pathExists, mkdirs, unlinkSync, writeFile } from 'fs-extra';
import { component, story } from './templates';
import { utilityCapitalizeFirst } from '../../utilities';

export const componentShared = async name => {
  if (!name) console.error(`\x1b[31m`, 'Insert a name valid!');

  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-shared/${formattedName}`;
  const path = `./src/components-shared/.gitkeep`;

  if (await pathExists(dir)) console.error(`\x1b[31m`, 'A component with that name already exists.');

  await mkdirs(dir);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  pathExists(path, (err, exists) => {
    if (exists) unlinkSync(path);
  });

  writeFile(`${dir}/${formattedName}.stories.tsx`, story(formattedName), writeFileErrorHandler);
  writeFile(`${dir}/index.tsx`, component(formattedName), writeFileErrorHandler);
};
