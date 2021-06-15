/** @format */

const fs = require("fs-extra");
const { package } = require("./templates/package");
const { execAsync } = require("../../utilities");
const boxen = require("boxen");

async function boilerplate(name) {
  const dir = `./${name}`;
  await fs.mkdirs(dir);
  const localDir = `${__dirname}/boilerplate`;

  await fs.copy(localDir, dir);

  fs.writeFile(`${dir}/package.json`, package(name));

  console.log(
    `\n\x1b[33m`,
    `\x1b[5m`,
    "WAITING... INSTALLING PACKAGE...",
    "\x1b[0m"
  );

  await execAsync(`npm install`, { cwd: dir });

  console.log(
    `\n\x1b[36m%s\x1b[0m`,
    boxen(
      `Now start coding by typing:\n\n  cd ${name}\n\nAfter if you want create or import other components:\n\n  npx rocket-generator`,
      {
        padding: 1,
        margin: 1,
        borderStyle: "doubleSingle",
      }
    )
  );

  console.log(`\x1b[32m`, "DONE! GOOD CODING!");
}

module.exports = boilerplate;
