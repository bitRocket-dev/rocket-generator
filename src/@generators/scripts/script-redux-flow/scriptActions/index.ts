/** @format */

import { readFileSync } from 'fs';
import { pathExists, writeFile } from 'fs-extra';
import { scriptBody } from './templates/scriptBody';
import { scriptImport } from './templates/scriptImport';

export const reduxScriptActions = async (name: string, choices: string[]) => {
  const dir2 = `./src/@sdk/redux-modules/${name}/actions.ts`;

  if (await pathExists(dir2)) {
    await scriptBody(name, choices);

    const data = await readFileSync(dir2).toString().split('\n');

    const str = await scriptImport(name, choices);
    if (!str.includes(undefined)) {
      str.map((item: string) => {
        data.splice(4, 0, item);
        const text = data.join('\n');
        writeFile(`${dir2}`, text, function (err) {
          if (err) return console.log(err);
        });
      });
    }
  }
};
