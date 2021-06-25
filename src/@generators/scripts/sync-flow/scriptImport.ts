import { readFileSync } from "fs-extra";


export const scriptImport = (name, choices) => {
  const dir = `./src/@sdk/redux-modules/${name}/actions.tsx`;
  const nameActionTypeUpper = name.toUpperCase();
  let content = [];
  const chomap = choices.map((item, index) => {
    if (
      readFileSync(dir)
        .toString()
        .includes(`  AT_${nameActionTypeUpper}_${item.toUpperCase()},`)
    )
      console.log("ALREADY EXIST");
    else content.push(`  AT_${nameActionTypeUpper}_${item.toUpperCase()},`);

    return content[index];
  });
  return chomap;
};
