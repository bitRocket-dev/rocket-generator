/** @format */

import { pathExists, copy } from 'fs-extra';

export const createI18n = async (): Promise<void> => {
  const localDir = `${__dirname}/templates`;
  const dir = './src/@sdk/i18n';

  if (await pathExists(dir)) console.error(`\x1b[31m`, `A component i18n already exists.`);

  if (await pathExists(localDir)) return copy(localDir, dir).catch(() => {});
};
