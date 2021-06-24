/** @format */

import { utilityCapitalizeFirst, throwIfError } from '../../utilities';
import fs from 'fs-extra';
import { component } from './new-template';

export const componentRouting = async name => {
  if (!name) throw new Error('You must include a component name.');
  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-routing/Route${formattedName}`;
  const localDir = `${__dirname}/templates/${formattedName}`;

  if (await fs.pathExists(dir)) console.error(`\x1b[31m`, `A component ${formattedName} already exists.`);

  if (await fs.pathExists(localDir))
    return fs.copy(localDir, `./src/components-routing/${formattedName}`).catch(() => {});

  await fs.mkdirs(dir);

  fs.writeFile(`${dir}/index.tsx`, component(formattedName), throwIfError);
};
