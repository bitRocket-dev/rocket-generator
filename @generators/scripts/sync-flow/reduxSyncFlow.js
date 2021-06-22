/** @format */

const fs = require("fs-extra");
const { actions } = require("./templates/actions");
const { constants } = require("./templates/constants");
const { declarations } = require("./templates/declarations");
const { reducers } = require("./templates/reducers");
const { splitString } = require("./templates/splitStringUtility");

async function reduxSyncFlow(name, reducer) {
  const names = splitString(name);
  if (!names[1]) throw new Error("You must include a component name.");

  const dir = `./src/@sdk/redux-modules/${names[0]}`;

  if (await fs.pathExists(dir))
    console.error(
      `\x1b[31m`,
      `A component ${names[0].toUpperCase()} already exists.`
    );
  else await fs.mkdirs(dir);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  fs.writeFile(`${dir}/actions.tsx`, actions(name), writeFileErrorHandler);
  fs.writeFile(`${dir}/constants.tsx`, constants(name), writeFileErrorHandler);
  fs.writeFile(
    `${dir}/declarations.tsx`,
    declarations(name),
    writeFileErrorHandler
  );

  if (reducer === "yes") {
    fs.writeFile(`${dir}/reducers.tsx`, reducers(name), writeFileErrorHandler);
  }
}

module.exports = reduxSyncFlow;
