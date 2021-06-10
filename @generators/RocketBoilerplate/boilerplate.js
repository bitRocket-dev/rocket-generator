/** @format */

const fs = require("fs-extra");

async function boilerplate(dir) {
  const localDir = `${__dirname}/RocketApp`;

  if (fs.existsSync(dir)) fs.copy(localDir, dir);
}

module.exports = boilerplate;
