/** @format */

const fs = require("fs-extra");
const { scriptImport } = require("./scriptImport");
const { scriptBody } = require("./scriptBody");
const { actions } = require("./templates/actions");
const { constants } = require("./templates/constants");
const { declarations } = require("./templates/declarations");
const { reducers } = require("./templates/reducers");

async function reduxSyncFlow(name, choices, reducer) {
  const dir = `./src/@sdk/redux-modules/${name}`;
  const dir2 = `./src/@sdk/redux-modules/${name}/actions.tsx`;

  if (await fs.pathExists(dir2)) {
    await scriptBody(name, choices);

    const data = fs
      .readFileSync(`./src/@sdk/redux-modules/${name}/actions.tsx`)
      .toString()
      .split("\n");

    const str = await scriptImport(name, choices);
    str.map((item) => {
      data.splice(3, 0, item);
      const text = data.join("\n");
      fs.writeFile(`${dir2}`, text, function (err) {
        if (err) return console.log(err);
      });
    });
  } else {
    await fs.mkdirs(dir);
    fs.writeFile(
      `${dir}/actions.tsx`,
      actions(name, choices),
      writeFileErrorHandler
    );
  }

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

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
