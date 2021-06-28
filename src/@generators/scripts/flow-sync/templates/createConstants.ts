/** @format */

export const createConstants = (name: string, choices: string[]): string => {
  const nameActionType = name.toUpperCase();
  const nameActionLog = name.charAt(0).toUpperCase() + name.slice(1);

  return `
  ${choices
    .map(
      operation =>
        `export const AT_${nameActionType}_${operation.toUpperCase()}: '[Action] - ${nameActionLog} ${
          operation.charAt(0).toUpperCase() + operation.slice(1)
        }'  = '[Action] - ${nameActionLog} ${operation.charAt(0).toUpperCase() + operation.slice(1)}';\n`,
    )
    .join('')}
  `;
};
