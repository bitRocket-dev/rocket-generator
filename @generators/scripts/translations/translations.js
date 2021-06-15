const fs = require("fs-extra");
const { interface } = require("./templates/interface");
const { locale } = require("./templates/locale");
const { translate } = require("./templates/translate");

async function translations() {
  const declaration = "./src/@sdk/i18n/declaration/";
  const translations = "./src/@sdk/i18n/translations/";

  if (!(await fs.pathExists(declaration))) await fs.mkdirs(declaration);
  if (!(await fs.pathExists(translations))) await fs.mkdirs(translations);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  fs.writeFile(`${declaration}/index.ts`, locale(), writeFileErrorHandler);
  fs.writeFile(`${translations}/index.ts`, interface(), writeFileErrorHandler);
  fs.writeFile(`./i18n/translate.ts`, translate(), writeFileErrorHandler);
}

module.exports = translations;
