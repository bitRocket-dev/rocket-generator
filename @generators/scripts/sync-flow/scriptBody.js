const { appendFileSync } = require("fs-extra");
const { utilityCapitalizeFirst } = require("../../utilities");

exports.scriptBody = (name, choices) => {
  const dir = `./src/@sdk/redux-modules/${name}/actions.tsx`;
  const formattedName = utilityCapitalizeFirst(name);

  const chomap = choices.map((item) => {
    appendFileSync(
      dir,
      `export const action${formattedName}${item}= (payload: any) => ({
  type: AT_${name.toUpperCase()}_${item.toUpperCase()},
  payload,
        });\r`
    );
  });
  return chomap;
};
