/** @format */

exports.declarations = name => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  return `
export interface T${formattedName} {}
  `;
};
