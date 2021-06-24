const { appendFileSync, readFileSync } = require("fs-extra");
const { utilityCapitalizeFirst } = require("../../utilities");

exports.scriptBody = (name, choices) => {
  const dir = `./src/@sdk/redux-modules/${name}/actions.tsx`;
  const formattedName = utilityCapitalizeFirst(name);

  choices.map((item) => {
    if (
      !readFileSync(dir).toString().includes(`action${formattedName}${item}`)
    ) {
      appendFileSync(
        dir,
        `export const action${formattedName}${item}= (payload: any) => ({
  type: AT_${name.toUpperCase()}_${item.toUpperCase()},
  payload,
        });\r`
      );
    }
  });
};
