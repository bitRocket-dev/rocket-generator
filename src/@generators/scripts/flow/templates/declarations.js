/** @format */

const { splitString } = require('./splitStringUtility');

exports.declarations = name => {
  const names = splitString(name);
  const formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);

  return `
  export interface T${formattedName} {}
  `;
};
