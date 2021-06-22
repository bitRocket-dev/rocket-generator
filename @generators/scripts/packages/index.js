const fs = require("fs-extra");
const { throwIfError } = require("../../utilities");

async function packages(name) {
  const localDir = `${__dirname}/templates/${name}`;
  const dir = `./src/@packages/${name}`;

  if (await fs.pathExists(dir))
    console.error(`\x1b[31m`, `A component ${name} already exists.`);

  if (await fs.pathExists(localDir))
    return fs.copy(localDir, dir).catch(() => {});
  throwIfError;
}

module.exports = packages;
