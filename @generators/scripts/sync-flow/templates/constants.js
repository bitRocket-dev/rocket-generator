/** @format */

exports.constants = (name, choices) => {
  const nameActionType = name.toUpperCase();
  const nameActionLog = name.charAt(0).toUpperCase() + name.slice(1);

  return `
  ${choices
    .map(
      (operation) =>
        `export const AT_${nameActionType}_${operation.toUpperCase()}_REQUEST = '[Action] - ${nameActionLog} ${
          operation.charAt(0).toUpperCase() + operation.slice(1)
        } Request';\n`
    )
    .join("")}
  `;
};
