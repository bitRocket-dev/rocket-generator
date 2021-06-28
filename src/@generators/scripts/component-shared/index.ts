/** @format */

import { pathExists, mkdirs, unlinkSync, writeFile } from 'fs-extra';
import { utilityCapitalizeFirst } from '../../utilities';
import { createStory } from './templates/createStory';
import { createComponent } from './templates/createComponent';

export const createComponentShared = async (name: string): Promise<void> => {
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

  writeFile(`${dir}/${formattedName}.stories.tsx`, createStory(formattedName), writeFileErrorHandler);
  writeFile(`${dir}/index.tsx`, createComponent(formattedName), writeFileErrorHandler);
};
