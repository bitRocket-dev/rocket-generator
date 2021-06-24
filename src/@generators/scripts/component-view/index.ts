/** @format */

import fs from 'fs-extra';
import { component, test } from './templates';
import { utilityCapitalizeFirst } from '../../utilities';

export const componentView = async name => {
  if (!name) console.error(`\x1b[31m`, 'Insert a name valid!');

  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-view/${formattedName}`;
  const path = `./src/components-view/.gitkeep`;

  if (await fs.pathExists(dir)) console.error(`\x1b[31m`, 'A component with that name already exists.');

  await fs.mkdirs(dir);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  fs.pathExists(path, (err, exists) => {
    if (exists) fs.unlinkSync(path);
  });

  fs.writeFile(`${dir}/index.tsx`, component(formattedName), writeFileErrorHandler);
  fs.writeFile(`${dir}/${formattedName}.spec.js`, test(formattedName), writeFileErrorHandler);
};
