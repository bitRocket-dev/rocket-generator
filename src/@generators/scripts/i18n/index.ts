/** @format */

import fs from 'fs-extra';

export const translations = async () => {
  const localDir = `${__dirname}/templates`;
  const dir = './src/@sdk/i18n';

  if (await fs.pathExists(dir)) console.error(`\x1b[31m`, `A component i18n already exists.`);

  if (await fs.pathExists(localDir)) return fs.copy(localDir, dir).catch(() => {});
};
