/** @format */

const { splitString } = require("./splitStringUtility");

exports.constants = (name) => {
  const names = splitString(name);
  const nameActionOperationType = names[1].toUpperCase();
  const nameActionOperationLog =
    names[1].charAt(0).toUpperCase() + names[0].slice(1);
  const nameActionType = names[0].toUpperCase();
  const nameActionLog = names[0].charAt(0).toUpperCase() + names[0].slice(1);

  return `
export const AT_${nameActionType}_${nameActionOperationType}_REQUEST = '[Action] - ${nameActionLog} ${nameActionOperationLog} Request';  
  `;
};
