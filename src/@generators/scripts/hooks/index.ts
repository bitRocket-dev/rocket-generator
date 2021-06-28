/** @format */

import { pathExists, copy } from 'fs-extra';

export const customHook = async (name: string): Promise<void> => {
  const dir = `./src/@sdk/hooks/${name}`;
  const localDir = `${__dirname}/templates/${name}`;

  if (await pathExists(dir)) console.error(`\x1b[31m`, `A component ${name} already exists.`);

  if (await pathExists(localDir)) return copy(localDir, dir);
};
