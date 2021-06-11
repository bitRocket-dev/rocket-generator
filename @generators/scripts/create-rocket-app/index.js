/** @format */

const fs = require("fs-extra");
const { package } = require("./templates/package");

async function boilerplate(dir, name) {
  const localDir = `${__dirname}/boilerplate`;

  if (await fs.pathExists(dir)) fs.copy(localDir, dir);
  fs.writeFile(`./package.json`, package(name));
}

module.exports = boilerplate;
