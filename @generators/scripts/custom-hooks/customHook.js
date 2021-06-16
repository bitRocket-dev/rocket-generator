const fs = require("fs-extra");

async function customHook(name) {
  const dir = `./src/@sdk/hooks/${name}.ts`;
  const localDir = `${__dirname}/${name}.ts`;

  if (await fs.pathExists(dir))
    console.error(`\x1b[31m`, "A component with that name already exists.");

  if (await fs.pathExists(localDir)) return fs.copy(localDir, dir);
}

module.exports = customHook;
