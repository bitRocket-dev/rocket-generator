/** @format */

import { pathExists, copy } from 'fs-extra';
import { throwIfError } from '../../utilities';

export const packages = async name => {
  const localDir = `${__dirname}/templates/${name}`;
  const dir = `./src/@packages/${name}`;

  if (await pathExists(dir)) console.error(`\x1b[31m`, `A component ${name} already exists.`);

  if (await pathExists(localDir)) return copy(localDir, dir).catch(() => {});
  throwIfError;
};
