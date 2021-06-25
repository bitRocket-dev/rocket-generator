/** @format */

import {pathExists,readFileSync,writeFile,mkdirs} from "fs-extra";
import { scriptImport } from "./scriptImport";
import { scriptBody } from "./scriptBody";
import { actions } from "./templates/actions";
import { constants } from "./templates/constants";
import { declarations } from "./templates/declarations";
import { reducers } from "./templates/reducers";

async function reduxSyncFlow(name, choices, reducer) {
  const dir = `./src/@sdk/redux-modules/${name}`;
  const dir2 = `./src/@sdk/redux-modules/${name}/actions.tsx`;

  if (await pathExists(dir2)) {
    await scriptBody(name, choices);

    const data = readFileSync(dir2).toString().split("\n");

    const str = await scriptImport(name, choices);
    console.log(str);
    if (str !== [undefined]) {
      str.map((item) => {
        data.splice(3, 0, item);
        const text = data.join("\n");
        writeFile(`${dir2}`, text, function (err) {
          if (err) return console.log(err);
        });
      });
    }
  } else {
    await mkdirs(dir);
    writeFile(
      `${dir}/actions.tsx`,
      actions(name, choices),
      writeFileErrorHandler
    );
  }

  function writeFileErrorHandler(err) {
    if (err) throw err;
  }

   writeFile(
    `${dir}/constants.tsx`,
    constants(name, choices),
    writeFileErrorHandler
  );
   writeFile(
    `${dir}/declarations.tsx`,
    declarations(name),
    writeFileErrorHandler
  );

  if (reducer === "yes") {
     writeFile(
      `${dir}/reducers.tsx`,
      reducers(name, choices),
      writeFileErrorHandler
    );
  }
}

module.exports = reduxSyncFlow;
