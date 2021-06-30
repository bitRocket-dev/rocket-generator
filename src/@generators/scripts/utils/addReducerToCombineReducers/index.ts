/** @format */

import { readFileSync } from 'fs';
import { copy, pathExists, writeFile } from 'fs-extra';

export const addReducerToCombineReducers = async (name: string): Promise<void> => {
  const reducerDir = `./src/@sdk/redux-modules/reducers.ts`;
  const localDir = `${__dirname}/utils/reducers.ts`;
  const nameUpperOne = name.charAt(0).toUpperCase() + name.slice(1);

  if (await pathExists(reducerDir)) {
    const data = readFileSync(reducerDir).toString().split('\n');
    if (!readFileSync(reducerDir).toString().includes(`${name}:reducer${nameUpperOne}`)) {
      data.splice(4, 0, `import { reducer${nameUpperOne} } from './${name}/reducer'`);
      data.splice(data.length - 3, 0, `${name}:reducer${nameUpperOne},`);

      const text = data.join('\n');
      writeFile(`${reducerDir}`, text, function (err) {
        if (err) return console.log(err);
      });
    }
  } else {
    await copy(localDir, reducerDir);
    addReducerToCombineReducers(name);
  }
};
