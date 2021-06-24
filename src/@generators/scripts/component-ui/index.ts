/** @format */

const fs = require('fs-extra');
const { component, story, test } = require('./new-template.js');
const { utilityCapitalizeFirst, throwIfError, execAsync } = require('../../utilities.js');

async function componentUi(name) {
  const themePath = './src/components-ui/@theme';
  const providerPath = './src/components-ui/Providers.tsx';
  const localThemeDir = `${__dirname}/utils/@theme`;
  const localProvidersDir = `${__dirname}/utils/Providers.tsx`;
  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-ui/${formattedName}`;
  const localDir = `${__dirname}/templates/${formattedName}`;
  const path = `./src/components-ui/.gitkeep`;

  if (formattedName) {
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
    foo(formattedName);
    if (await fs.pathExists(dirPlus)) console.error(`\x1b[31m`, `A component ${formattedName} already exists.`);
    if (formattedName === 'Datepicker' || formattedName === 'TimePicker') {
      fs.pathExistsSync(`./src/components-ui/Input`)
        ? foo('Input')
        : fs.copy(`${__dirname}/templates/Input`, `./src/components-ui/Input`) && foo('Input');
    }
    if (localDirPlus instanceof Array) {
      localDirPlus.map((item, index) => fs.copy(item, dirPlus[index]).catch(() => {}));
    } else fs.copy(localDirPlus, dirPlus).catch(() => {});
  }

  if (fs.pathExistsSync(path)) {
    fs.unlinkSync(path);
  }

  if (!fs.existsSync(themePath)) {
    fs.copy(localThemeDir, themePath).catch(() => {});
    fs.copy(localProvidersDir, providerPath).catch(() => {});
  }

  if (!name) throw new Error('You must include a component name.');

  if (await fs.pathExists(dir)) console.error(`\x1b[31m`, `A component ${formattedName} already exists.`);

  if (await fs.pathExists(localDir)) return fs.copy(localDir, dir).catch(() => {});

  await fs.mkdirs(dir);

  fs.writeFile(`${dir}/${formattedName}.stories.tsx`, story(formattedName), throwIfError);
  fs.writeFile(`${dir}/${formattedName}.test.tsx`, test(formattedName), throwIfError);
  fs.writeFile(`${dir}/index.tsx`, component(formattedName), throwIfError);

  await execAsync(`npm install styled-components`, { cwd: dir });
}

module.exports = componentUi;
