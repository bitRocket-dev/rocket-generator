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
  spawn("npm", ["install"], { cwd: dir });
}

module.exports = boilerplate;
