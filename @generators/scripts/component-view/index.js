/** @format */

const fs = require("fs");
const { component, gitkeep } = require("./templates.js");
const { utilityCapitalizeFirst } = require("../../utilities.js");

const [name] = process.argv.slice(2);
if (!name) throw new Error("You must include a component name.");

const formattedName = utilityCapitalizeFirst(name);
const dir = `./src/components-view/View${formattedName}`;

if (fs.existsSync(dir)) throw new Error("A component with that name already exists.");

fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

fs.mkdirSync(`${dir}/components`);
fs.writeFile(`${dir}/components/.gitkeep`, gitkeep(), writeFileErrorHandler);
fs.writeFile(`${dir}/index.tsx`, component(formattedName), writeFileErrorHandler);
