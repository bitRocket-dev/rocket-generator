/** @format */

import fs from 'fs-extra';
import { throwIfError } from '../../utilities';
import { envOption } from './envOption';

export const packages = (packages, options) => {
  packages.map(name => {
    const localDir = `${__dirname}/templates/${name}`;
    const dir = `./src/@packages/${name}`;

    if (name === 'firebase') {
      const envPath = './.env';
      fs.writeFile(envPath, envOption(options), throwIfError);
    }

    if (fs.pathExists(dir)) console.error(`\x1b[31m`, `A component ${name} already exists.`);

    if (fs.pathExists(localDir)) return fs.copy(localDir, dir).catch(err => throwIfError(err));
  });
};
