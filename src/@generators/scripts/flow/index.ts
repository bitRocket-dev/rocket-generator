/** @format */

import { readFileSync, writeFile } from 'fs-extra';
import { createScriptStore } from './templates/scriptStore';

export const reduxScriptStore = async (name: string): Promise<void> => {
  const dir = `./src/@sdk/declarations/store.ts`;
  const nameActionTypeLower = name.charAt(0).toUpperCase() + name.slice(1);

  const data = readFileSync(dir).toString().split('\n');

  if (!readFileSync(dir).toString().includes(`${nameActionTypeLower}`)) {
    data.splice(4, 0, createScriptStore(name));

    const text = data.join('\n');
    writeFile(`${dir}`, text, function (err) {
      if (err) return console.log(err);
    });
  }
};
