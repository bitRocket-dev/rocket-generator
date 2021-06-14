/** @format */

const fs = require("fs-extra");
const { package } = require("./templates/package");
const { execAsync } = require("../../utilities");

async function boilerplate(name, type) {
  const dir = `./${name}`;
  await fs.mkdirs(dir);
  const localDir = `${__dirname}/boilerplate`;

  await fs.copy(localDir, dir);

  fs.writeFile(`${dir}/package.json`, package(name));

  console.log(`\n\x1b[33m`, "WAITING... INSTALLING PACKAGE...");

  await execAsync(`${type} install`, { cwd: dir });

  console.log(`\x1b[32m`, "DONE! GOOD CODING!");
}

module.exports = boilerplate;
