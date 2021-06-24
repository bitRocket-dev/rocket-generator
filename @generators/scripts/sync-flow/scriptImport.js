exports.scriptImport = (name, choices) => {
  const nameActionTypeUpper = name.toUpperCase();
  let content = [];
  const chomap = choices.map((item, index) => {
    switch (item) {
      case "Update":
        content.push(`AT_${nameActionTypeUpper}_UPDATE,`);
        break;

      case "Delete":
        content.push(`AT_${nameActionTypeUpper}_DELETE,`);
        break;

      default:
        console.log("..one moment");
    }
    return content[index];
  });
  return chomap;
};
