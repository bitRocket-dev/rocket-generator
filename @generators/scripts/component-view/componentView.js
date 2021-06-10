/** @format */

const fs = require("fs-extra");
const { component, gitkeep } = require("./templates.js");
const { utilityCapitalizeFirst } = require("../../utilities.js");

async function componentView(name) {
  if (!name) console.error(`\x1b[31m`, "Insert a name valid!");

  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-view/View${formattedName}`;
  const keep = `./src/components-view/View${formattedName}/components`;

  if (await fs.pathExists(dir))
    console.error(`\x1b[31m`, "A component with that name already exists.");

  await fs.mkdirs(dir);
  await fs.mkdir(keep);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  fs.writeFile(`${dir}/components/.gitkeep`, gitkeep(), writeFileErrorHandler);
  fs.writeFile(
    `${dir}/index.tsx`,
    component(formattedName),
    writeFileErrorHandler
  );
}

module.exports = componentView;
