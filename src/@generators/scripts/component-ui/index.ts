/** @format */

import { pathExists, pathExistsSync, writeFile, mkdirs, copy, unlinkSync, existsSync } from 'fs-extra';
import { utilityCapitalizeFirst, throwIfError, execAsync } from '../../utilities';
import { createComponent } from './templates/createComponent';
import { createTest } from './templates/createTest';
import { createStory } from './templates/createStory';

export const createComponentUi = async (name: string): Promise<void> => {
  const themePath = './src/components-ui/@theme';
  const providerPath = './src/components-ui/Providers.tsx';
  const localThemeDir = `${__dirname}/utils/@theme`;
  const localProvidersDir = `${__dirname}/utils/Providers.tsx`;
  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-ui/${formattedName}`;
  const localDir = `${__dirname}/templates/${formattedName}`;
  const path = `./src/components-ui/.gitkeep`;
  let dirPlus;
  let localDirPlus;
  function foo(formattedName) {
    switch (formattedName) {
      case 'Button':
        dirPlus = `./src/components-ui/Icon`;
        localDirPlus = `${__dirname}/templates/Icon`;
        break;
      case 'Datepicker':
        dirPlus = [`./src/components-ui/Text`, `./src/components-ui/Input`];
        localDirPlus = [`${__dirname}/templates/Text`, `${__dirname}/templates/Input`];
        break;
      case 'Input':
        dirPlus = [
          `./src/components-ui/Text`,
          `./src/components-ui/Icon`,
          `./src/components-ui/Grid`,
          `./src/@sdk/utils/validate`,
          `./src/@sdk/hooks/useInput.ts`,
        ];
        localDirPlus = [
          `${__dirname}/templates/Text`,
          `${__dirname}/templates/Icon`,
          `${__dirname}/templates/Grid`,
          `${__dirname}/utils/utility/validate`,
          `${__dirname}/utils/utility/useInput.ts`,
        ];
        break;
      case 'Select':
        dirPlus = `./src/components-ui/Text`;
        localDirPlus = `${__dirname}/templates/Text`;
        break;
      case 'Tabs':
        dirPlus = [`./src/components-ui/Text`, `./src/components-ui/Grid`];
        localDirPlus = [`${__dirname}/templates/Text`, `${__dirname}/templates/Grid`];
        break;
      case 'TimePicker':
        dirPlus = [`./src/components-ui/Text`, `./src/components-ui/Input`];
        localDirPlus = [`${__dirname}/templates/Text`, `${__dirname}/templates/Input`];

        break;
      case 'Avatar':
        dirPlus = `./src/components-ui/Text`;
        localDirPlus = `${__dirname}/templates/Text`;
        break;
      case 'Image':
        dirPlus = `./src/components-ui/Loader`;
        localDirPlus = `${__dirname}/templates/Loader`;
        break;
      case 'NavigateTo':
        dirPlus = `./src/@sdk/hooks/useNavigation.ts`;
        localDirPlus = `${__dirname}/utils/utility/useNavigation.ts`;
        break;
      case 'Modal':
        dirPlus = `./src/components-ui/Icon`;
        localDirPlus = `${__dirname}/templates/Icon`;
        break;
      default:
        break;
    }
  }
  if (formattedName) {
    foo(formattedName);
    if (await pathExists(dirPlus)) console.error(`\x1b[31m`, `A component ${formattedName} already exists.`);
    if (formattedName === 'Datepicker' || formattedName === 'TimePicker') {
      pathExistsSync(`./src/components-ui/Input`)
        ? foo('Input')
        : copy(`${__dirname}/templates/Input`, `./src/components-ui/Input`) && foo('Input');
    }
    if (localDirPlus instanceof Array) {
      localDirPlus.map((item, index) => copy(item, dirPlus[index]).catch(() => {}));
    } else copy(localDirPlus, dirPlus).catch(() => {});
  }

  if (pathExistsSync(path)) {
    unlinkSync(path);
  }

  if (!existsSync(themePath)) {
    copy(localThemeDir, themePath).catch(() => {});
    copy(localProvidersDir, providerPath).catch(() => {});
  }

  if (!name) throw new Error('You must include a component name.');

  if (await pathExists(dir)) console.error(`\x1b[31m`, `A component ${formattedName} already exists.`);

  if (await pathExists(localDir)) return copy(localDir, dir).catch(() => {});

  await mkdirs(dir);

  writeFile(`${dir}/${formattedName}.stories.tsx`, createStory(formattedName), throwIfError);
  writeFile(`${dir}/${formattedName}.test.tsx`, createTest(formattedName), throwIfError);
  writeFile(`${dir}/index.tsx`, createComponent(formattedName), throwIfError);

  await execAsync(`npm install styled-components`, { cwd: dir });
};
