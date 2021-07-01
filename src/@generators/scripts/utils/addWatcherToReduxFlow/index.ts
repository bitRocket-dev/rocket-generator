/** @format */
import { copy, pathExists, readFileSync, writeFileSync } from 'fs-extra';

export const addWatcherToReduxFlow = async (name: string, operation: string): Promise<void> => {
  const indexWatcherPath = `./src/@sdk/redux-modules/watchers.ts`;
  const localIndexWatcherPath = `${__dirname}/utils/watchers.ts`;
  const nameUpperOne = name.charAt(0).toUpperCase() + name.slice(1);

  if (await pathExists(indexWatcherPath)) {
    const data = readFileSync(indexWatcherPath).toString().split('\n');
    if (!readFileSync(indexWatcherPath).toString().includes(`watcher${nameUpperOne},`)) {
      data.splice(
        1,
        0,
        `import { watcher${nameUpperOne} } from './${nameUpperOne}/${operation.toLocaleLowerCase()}/watcher'`,
      );
      data.splice(data.length - 3, 0, `watcher${nameUpperOne},`);
      const text = data.join('\n');
      writeFileSync(`${indexWatcherPath}`, text);
    }
  } else {
    await copy(localIndexWatcherPath, indexWatcherPath);
    addWatcherToReduxFlow(name, operation);
  }
};
