const { readFileSync } = require("fs-extra");

exports.scriptImport = (name, choices) => {
  const dir = `./src/@sdk/redux-modules/${name}/actions.tsx`;
  const nameActionTypeUpper = name.toUpperCase();
  let content = [];
  const chomap = choices.map((item, index) => {
    if (readFileSync(dir).toString().includes(`${item.toUpperCase()}`)) {
      console.log("ALREADY EXIST");
    } else {
      switch (item) {
        case "Update":
          content.push(`  AT_${nameActionTypeUpper}_${item.toUpperCase()},\r`);
          break;

        case "Delete":
          content.push(`  AT_${nameActionTypeUpper}_DELETE,\r`);
          break;

        case "Create":
          content.push(`  AT_${nameActionTypeUpper}_CREATE,\r`);
          break;

        default:
          console.log("..one moment");
      }
      return content[index];
    }
  });
  return chomap;
};
