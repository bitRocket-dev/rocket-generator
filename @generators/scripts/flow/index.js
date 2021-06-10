/** @format */

const fs = require("fs-extra");
const { sagas } = require("./templates/sagas");
const { actions } = require("./templates/actions");
const { constants } = require("./templates/constants");
const { declarations } = require("./templates/declarations");
const { api } = require("./templates/api");
const { reducers } = require("./templates/reducers");
const { splitString } = require("./templates/splitStringUtility");

const [name] = process.argv.slice(2);
const names = splitString(name);
if (!names[1]) throw new Error("You must include a component name.");

const nameUpper = names[1].charAt(0).toUpperCase() + names[1].slice(1);

const dir = `./src/@sdk/${nameUpper}`;
const dir2 = `${dir}/${nameUpper}${names[0]}`;

if (fs.existsSync(dir)) {
  fs.mkdirsSync(dir2);
} else {
  fs.mkdirsSync(dir);
  fs.mkdirsSync(dir2);
}

function writeFileErrorHandler(err) {
  if (err) throw err;
}

fs.writeFile(`${dir2}/sagas.tsx`, sagas(name), writeFileErrorHandler);
fs.writeFile(`${dir2}/actions.tsx`, actions(name), writeFileErrorHandler);
fs.writeFile(`${dir2}/constants.tsx`, constants(name), writeFileErrorHandler);
fs.writeFile(
  `${dir2}/declarations.tsx`,
  declarations(name),
  writeFileErrorHandler
);
fs.writeFile(`${dir2}/api.tsx`, api(name), writeFileErrorHandler);
fs.writeFile(`${dir2}/reducers.tsx`, reducers(name), writeFileErrorHandler);
