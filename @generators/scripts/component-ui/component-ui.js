/** @format */

const fs = require("fs-extra");
const { component, story, test } = require("./templates.js");
const {
  utilityCapitalizeFirst,
  throwIfError,
  execAsync,
} = require("../../utilities.js");

async function componentUi(name) {
  if (!name) throw new Error("You must include a component name.");

  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-ui/${formattedName}`;

  const localDir = `${__dirname}/${formattedName}`;

  if (await fs.pathExists(dir))
    console.error(`\x1b[31m`, "A component with that name already exists.");

  if (await fs.pathExists(localDir)) return fs.copy(localDir, dir);

  await fs.mkdirs(dir);

  fs.writeFile(
    `${dir}/${formattedName}.stories.tsx`,
    story(formattedName),
    throwIfError
  );
  fs.writeFile(`${dir}/index.tsx`, component(formattedName), throwIfError);
  fs.writeFile(
    `.${dir}/${formattedName}.test.js`,
    test(formattedName),
    throwIfError
  );

  await execAsync(`npm install styled-components`, { cwd: dir });
}

module.exports = componentUi;
