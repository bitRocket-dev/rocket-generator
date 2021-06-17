/** @format */

const fs = require("fs-extra");
const { component, story } = require("./templates.js");
const { utilityCapitalizeFirst } = require("../../utilities.js");

async function componentShared(name) {
  if (!name) console.error(`\x1b[31m`, "Insert a name valid!");

  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-shared/${formattedName}`;
  const path = `./src/components-shared/.gitkeep`;

  if (await fs.pathExists(dir))
    console.error(`\x1b[31m`, "A component with that name already exists.");

  await fs.mkdirs(dir);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  if (await fs.pathExists(path)) fs.unlinkSync(path);

  fs.writeFile(
    `${dir}/${formattedName}.stories.tsx`,
    story(formattedName),
    writeFileErrorHandler
  );
  fs.writeFile(
    `${dir}/index.tsx`,
    component(formattedName),
    writeFileErrorHandler
  );
}

module.exports = componentShared;
