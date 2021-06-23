exports.scriptImport = (name, choices) => {
  const nameActionTypeUpper = name.toUpperCase();
  console.log(nameActionTypeUpper, choices);
  let prova = [];
  const chomap = choices.map((item, index) => {
    switch (item) {
      case "Delete":
        prova.push(`AT_${nameActionTypeUpper}_DELETE_REQUEST,`);
      case "Update":
        prova.push(`AT_${nameActionTypeUpper}_UPDATE_REQUEST,`);
      default:
        console.log("ok");
    }
    return prova[index];
  });
  return chomap;
};
