/** @format */

const fs = require("fs-extra");
const { component, story } = require("./templates.js");
const { utilityCapitalizeFirst } = require("../../utilities.js");

const [name] = process.argv.slice(2);
if (!name) throw new Error("You must include a component name.");

const formattedName = utilityCapitalizeFirst(name);
const dir = `./src/components-ui/${formattedName}`;

const localDir = `${__dirname}/${formattedName}`;

if (fs.existsSync(dir))
  throw new Error("A component with that name already exists.");

if (fs.existsSync(localDir)) return fs.copy(localDir, dir);

fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

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
