const fs = require("fs-extra");

async function translations() {
  const localDir = `${__dirname}/templates`;
  const dir = "./src/@sdk/i18n";

  if (await fs.pathExists(localDir))
    return fs.copy(localDir, dir).catch(() => {});
  writeFileErrorHandler;
}

module.exports = translations;
