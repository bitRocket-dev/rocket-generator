/** @format */

const { utilityCapitalizeFirst, throwIfError } = require('../../utilities');
const fs = require('fs-extra');
const { component } = require('./new-template.js');

async function componentRouting(name) {
  if (!name) throw new Error('You must include a component name.');
  const formattedName = utilityCapitalizeFirst(name);
  const dir = `./src/components-routing/Route${formattedName}`;
  const localDir = `${__dirname}/templates/${formattedName}`;

  if (await fs.pathExists(dir)) console.error(`\x1b[31m`, `A component ${formattedName} already exists.`);

  if (await fs.pathExists(localDir))
    return fs.copy(localDir, `./src/components-routing/${formattedName}`).catch(() => {});

  await fs.mkdirs(dir);

  fs.writeFile(`${dir}/index.tsx`, component(formattedName), throwIfError);
}

module.exports = componentRouting;
