/** @format */

import { readFileSync } from 'fs-extra';

export const scriptImport = (name: string, choices: string[]): string[] => {
  const dir = `./src/@sdk/redux-modules/${name}/actions.ts`;
  const nameActionTypeUpper = name.toUpperCase();
  let content = [];
  const chomap = choices.map((item, index) => {
    if (readFileSync(dir).toString().includes(`  AT_${nameActionTypeUpper}_${item.toUpperCase()},`))
      console.log('import already exist');
    else content.push(`  AT_${nameActionTypeUpper}_${item.toUpperCase()},`);

    return content[index];
  });
  return chomap;
};
