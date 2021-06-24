/** @format */

import {pathExists, unlinkSync, copy} from 'fs-extra';

export const customUtils = async (name: string, dirPath?: string) => {
  const dir =
    name === 'fetch' || name === 'helpers' || name === 'time'
      ? `./src/@sdk/utils/${name}`
      : `./src/@sdk/utils/${dirPath}/${name}`;
  const localDir =
    name === 'fetch' || name === 'helpers' || name === 'time'
      ? `${__dirname}/templates/${name}`
      : `${__dirname}/templates/${dirPath}/${name}`;

  const path =
    name === 'fetch' || name === 'helpers' || name === 'time'
      ? `./src/@sdk/utils/${name}/.gitkeep`
      : `./src/@sdk/utils/${dirPath}/.gitkeep`;

  pathExists(path, exists => {
    if (exists) unlinkSync(path).catch(() => {});
  });

  if (await pathExists(dir)) console.error(`\x1b[31m`, `A component ${name.toUpperCase()} already exists.`);

  if (await pathExists(localDir)) return copy(localDir, dir);
};
