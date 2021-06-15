/** @format */

const fs = require("fs-extra");
const { component, gitkeep } = require("./templates.js");
const { utilityCapitalizeFirst } = require("../../utilities.js");

async function componentView(name) {
  if (!name) console.error(`\x1b[31m`, "Insert a name valid!");

  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-view/View${formattedName}`;

  if (await fs.pathExists(dir))
    console.error(`\x1b[31m`, "A component with that name already exists.");

  await fs.mkdirs(dir);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  fs.writeFile(
    `${dir}/index.tsx`,
    component(formattedName),
    writeFileErrorHandler
  );
}

module.exports = componentView;
