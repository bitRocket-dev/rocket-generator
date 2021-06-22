/** @format */

const { splitString } = require("./splitStringUtility");

exports.declarations = (name) => {
  const names = splitString(name);
  const formattedName = names[0].charAt(0).toUpperCase() + names[0].slice(1);

  return `
  export interface T${formattedName} {}
  `;
};
