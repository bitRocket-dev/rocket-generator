/** @format */

import { exec } from 'child_process';

export const utilityCapitalizeFirst = (string: string): string =>
  string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);

export const execAsync = (command, options = {}): Promise<string> =>
  new Promise((resolve, reject) =>
    exec(command, options, (err, stdout, stderr) => {
      if (err) return reject(err);
      return resolve(stdout);
    }),
  );

export const throwIfError = (err: Error): Error | void => {
  if (err) throw err;
};
