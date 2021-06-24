/** @format */

import fs from 'fs-extra';

export const customHook = async name => {
  const dir = `./src/@sdk/hooks/${name}`;
  const localDir = `${__dirname}/templates/${name}`;

  if (await fs.pathExists(dir)) console.error(`\x1b[31m`, `A component ${name} already exists.`);

  if (await fs.pathExists(localDir)) return fs.copy(localDir, dir);
};
