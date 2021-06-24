/** @format */

const fs = require("fs-extra");
const { actions } = require("./templates/actions");
const { constants } = require("./templates/constants");
const { declarations } = require("./templates/declarations");
const { reducers } = require("./templates/reducers");

async function reduxSyncFlow(name, choices, reducer) {
  const dir = `./src/@sdk/redux-modules/${name.toLowerCase()}`;

  if (await fs.pathExists(dir))
    console.error(
      `\x1b[31m`,
      `A component ${name.toUpperCase()} already exists.`
    );
  else await fs.mkdirs(dir);

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

  fs.writeFile(
    `${dir}/actions.tsx`,
    actions(name, choices),
    writeFileErrorHandler
  );

  fs.writeFile(
    `${dir}/constants.tsx`,
    constants(name, choices),
    writeFileErrorHandler
  );
  fs.writeFile(
    `${dir}/declarations.tsx`,
    declarations(name),
    writeFileErrorHandler
  );

  if (reducer === "yes") {
    fs.writeFile(
      `${dir}/reducers.tsx`,
      reducers(name, choices),
      writeFileErrorHandler
    );
  }
}

module.exports = reduxSyncFlow;
