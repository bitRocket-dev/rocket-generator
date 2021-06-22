const fs = require("fs-extra");

async function customUtils(name, dirPath) {
  const dir =
    name === "fetch" || name === "helpers" || name === "time"
      ? `./src/@sdk/utils/${name}`
      : `./src/@sdk/utils/${dirPath}/${name}`;
  const localDir =
    name === "fetch" || name === "helpers" || name === "time"
      ? `${__dirname}/templates/${name}`
      : `${__dirname}/templates/${dirPath}/${name}`;

  const path =
    name === "fetch" || name === "helpers" || name === "time"
      ? `./src/@sdk/utils/${name}/.gitkeep`
      : `./src/@sdk/utils/${dirPath}/.gitkeep`;

  fs.pathExists(path, (exists) => {
    if (exists) fs.unlinkSync(path).catch(() => {});
  });

  if (await fs.pathExists(dir))
    console.error(
      `\x1b[31m`,
      `A component ${name.toUpperCase()} already exists.`
    );

  if (await fs.pathExists(localDir)) return fs.copy(localDir, dir);
}

module.exports = customUtils;
