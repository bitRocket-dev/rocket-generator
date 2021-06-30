/** @format */

import { pathExists, copy, mkdirsSync } from 'fs-extra';

export const createAuthentication = async (): Promise<void> => {
  const localDir = `${__dirname}/templates/auth`;
  const dir = './src/@sdk/redux-modules/auth';

  if (await pathExists(dir)) copy(localDir, dir).catch(() => {});
  else {
    mkdirsSync(dir);
    copy(localDir, dir).catch(() => {});
  }
};
