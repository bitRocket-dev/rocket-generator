/** @format */

import fs from 'fs-extra';
import { throwIfError } from '../../utilities';

export const packages = async name => {
  const localDir = `${__dirname}/templates/${name}`;
  const dir = `./src/@packages/${name}`;

  if (await fs.pathExists(dir)) console.error(`\x1b[31m`, `A component ${name} already exists.`);

  if (await fs.pathExists(localDir)) return fs.copy(localDir, dir).catch(() => {});
  throwIfError;
};
