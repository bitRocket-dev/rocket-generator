/** @format */

import { readFileSync, writeFileSync } from 'fs-extra';

export const addWatcherSingle = async (name: string, operation: string): Promise<void> => {
  const nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
  const operationUpper = operation.charAt(0).toUpperCase() + operation.slice(1);
  const dirWatcher = `./src/@sdk/redux-modules/${nameUpper}`;
  const dirNewWatcher = `${dirWatcher}/watcher.ts`;
  if (!readFileSync(dirNewWatcher).toString().includes(`AT_${name.toUpperCase()}_${operation.toUpperCase()}_REQUEST`)) {
    const data = readFileSync(dirNewWatcher).toString().split('\n');
    data.splice(
      3,
      0,
      `import { saga${nameUpper}${operationUpper} } from './${operation.toLowerCase()}/sagas'
import { AT_${name.toUpperCase()}_${operation.toUpperCase()}_REQUEST } from './${operation.toLowerCase()}/constants'`,
    );
    data.splice(
      data.length - 2,
      0,
      `yield takeLatest(AT_${name.toUpperCase()}_${operation.toUpperCase()}_REQUEST, saga${nameUpper}${operationUpper});`,
    );
    const text = data.join('\n');
    writeFileSync(`${dirNewWatcher}`, text);
  }
};
