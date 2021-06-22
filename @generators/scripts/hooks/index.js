const fs = require("fs-extra");

async function customHook(name) {
  const dir = `./src/@sdk/hooks/${name}`;
  const localDir = `${__dirname}/templates/${name}`;

  if (await fs.pathExists(dir))
    console.error(`\x1b[31m`, `A component ${name} already exists.`);

  if (await fs.pathExists(localDir)) return fs.copy(localDir, dir);
}

module.exports = customHook;
