/** @format */

const fs = require("fs-extra");

async function boilerplate(dir) {
  const localDir = `${__dirname}/boilerplate`;

  if (fs.existsSync(dir)) fs.copy(localDir, dir);
}

module.exports = boilerplate;
