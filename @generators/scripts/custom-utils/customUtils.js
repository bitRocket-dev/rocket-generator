const fs = require("fs-extra");

async function customUtils(name, dirPath) {
  const dir =
    name === "fetch" || name === "helpers" || name === "time"
      ? `./src/@sdk/utils/${name}`
      : `./src/@sdk/utils/${dirPath}/${name}`;
  const localDir =
    name === "fetch" || name === "helpers" || name === "time"
      ? `${__dirname}/${name}`
      : `${__dirname}/${dirPath}/${name}`;

  const path =
    name === "fetch" || name === "helpers" || name === "time"
      ? `./src/@sdk/utils/${name}/.gitkeep`
      : `./src/@sdk/utils/${dirPath}/.gitkeep`;

  if (await fs.pathExists(path)) fs.unlinkSync(path);

  if (await fs.pathExists(dir))
    console.error(
      `\x1b[31m`,
      `A component ${name.toUpperCase()} already exists.`
    );

  if (await fs.pathExists(localDir)) return fs.copy(localDir, dir);
}

module.exports = customUtils;
