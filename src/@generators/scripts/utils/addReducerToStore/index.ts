/** @format */

import { copy, pathExists, readFileSync, writeFileSync } from 'fs-extra';
import { utilityCreateStoreKey } from './utils/createStoreKey';

export const addReducerToStore = async (name: string): Promise<void> => {
  const dir = './src/@sdk/declarations/store.ts';
  const localDir = `${__dirname}/utils/store.ts`;
  const nameActionTypeLower = name.charAt(0).toUpperCase() + name.slice(1);

  if (await pathExists(dir)) {
    const data = readFileSync(dir).toString().split('\n');
    if (!readFileSync(dir).toString().includes(`${nameActionTypeLower}: any`)) {
      data.splice(5, 0, utilityCreateStoreKey(name));
      const text = data.join('\n');
      writeFileSync(`${dir}`, text);
    }
  } else {
    await copy(localDir, dir);
    await addReducerToStore(name);
  }
};
