/** @format */

const fs = require("fs-extra");
const { component, story, test } = require("./new-template.js");
const {
  utilityCapitalizeFirst,
  throwIfError,
  execAsync,
} = require("../../utilities");

async function componentUi(name) {
  const themePath = "./src/components-ui/@theme";
  const providerPath = "./src/components-ui/Providers.tsx";
  const localThemeDir = `${__dirname}/@theme`;
  const localProvidersDir = `${__dirname}/Providers.tsx`;
  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-ui/${formattedName}`;
  const localDir = `${__dirname}/${formattedName}`;
  const path = `./src/components-ui/.gitkeep`;

  if (formattedName) {
    let dirPlus;
    let localDirPlus;
    switch (formattedName) {
      case "Button":
        dirPlus = `./src/components-ui/Icon`;
        localDirPlus = `${__dirname}/Icon`;
        break;
      case "Datepicker":
        dirPlus = [`./src/components-ui/Text`, `./src/components-ui/Input`];
        localDirPlus = [`${__dirname}/Text`, `${__dirname}/Input`];
        break;
      case "Input":
        dirPlus = [
          `./src/components-ui/Text`,
          `./src/components-ui/Icon`,
          `./src/components-ui/Grid`,
          `./src/@sdk/utils/validate`,
          `./src/@sdk/hooks/useInput.ts`,
        ];
        localDirPlus = [
          `${__dirname}/Text`,
          `${__dirname}/Icon`,
          `${__dirname}/Grid`,
          `${__dirname}/utility/validate`,
          `${__dirname}/utility/useInput.ts`,
        ];
        break;
      case "Select":
        dirPlus = `./src/components-ui/Text`;
        localDirPlus = `${__dirname}/Text`;
        break;
      case "Tabs":
        dirPlus = [`./src/components-ui/Text`, `./src/components-ui/Grid`];
        localDirPlus = [`${__dirname}/Text`, `${__dirname}/Grid`];
        break;
      case "TimePicker":
        dirPlus = [`./src/components-ui/Text`, `./src/components-ui/Input`];
        localDirPlus = [`${__dirname}/Text`, `${__dirname}/Input`];
        break;
      case "Avatar":
        dirPlus = `./src/components-ui/Text`;
        localDirPlus = `${__dirname}/Text`;
        break;
      case "Image":
        dirPlus = `./src/components-ui/Loader`;
        localDirPlus = `${__dirname}/Loader`;
        break;
      case "NavigateTo":
        dirPlus = `./src/@sdk/hooks/useNavigation.ts`;
        localDirPlus = `${__dirname}/utility/useNavigation.ts`;
        break;
      default:
        break;
    }
    if (await fs.pathExists(dirPlus))
      console.error(`\x1b[31m`, `A component ${formattedName} already exists.`);
    if (localDirPlus instanceof Array) {
      localDirPlus.map((item, index) =>
        fs.copy(item, dirPlus[index]).catch(() => {})
      );
    } else fs.copy(localDirPlus, dirPlus).catch(() => {});
  }

  if (!fs.existsSync(themePath)) {
    fs.copy(localThemeDir, themePath).catch(() => {});
    fs.copy(localProvidersDir, providerPath).catch(() => {});
  }

  if (!name) throw new Error("You must include a component name.");

  if (await fs.pathExists(dir))
    console.error(`\x1b[31m`, `A component ${formattedName} already exists.`);

  if (await fs.pathExists(localDir))
    return fs.copy(localDir, dir).catch(() => {});

  await fs.mkdirs(dir);

  fs.pathExists(path, (err, exists) => {
    if (exists) fs.unlinkSync(path);
  });

  fs.writeFile(
    `${dir}/${formattedName}.stories.tsx`,
    story(formattedName),
    throwIfError
  );
  fs.writeFile(
    `${dir}/${formattedName}.test.tsx`,
    test(formattedName),
    throwIfError
  );
  fs.writeFile(`${dir}/index.tsx`, component(formattedName), throwIfError);

  await execAsync(`npm install styled-components`, { cwd: dir });
}

module.exports = componentUi;
