/** @format */

exports.actions = (name, choices) => {
  const nameActionTypeUpper = name.toUpperCase();
  const nameActionTypeLowewr = name.charAt(0).toUpperCase() + name.slice(1);

  return `
//#region ::: IMPORT
import {
  ${choices
    .map(
      (operation) => `AT_${nameActionTypeUpper}_${operation.toUpperCase()}, \n`
    )
    .join("")}} from './constants';

// #region ::: ${nameActionTypeUpper}
${choices
  .map(
    (operation) =>
      `export const action${nameActionTypeLowewr}${operation} = (payload: any) => ({
  type: AT_${nameActionTypeUpper}_${operation.toUpperCase()},
  payload,
  }); \n \n  `
  )
  .join("")}
// #endregion
`;
};
