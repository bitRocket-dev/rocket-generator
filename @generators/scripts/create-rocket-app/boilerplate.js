/** @format */

const fs = require("fs-extra");
const { spawn } = require("child_process");

const { package } = require("./templates/package");

async function boilerplate(name) {
  const dir = `./${name}`;
  await fs.mkdirs(dir);
  const localDir = `${__dirname}/boilerplate`;

  await fs.copy(localDir, dir);

  fs.writeFile(`${dir}/package.json`, package(name));

  console.log(`\n\x1b[33m`, "WAITING... INSTALLING PACKAGE...");
  await spawn("npm", ["install"], { cwd: dir });
  console.log(`\x1b[32m`, "DONE! GOOD CODING!");
}

module.exports = boilerplate;
