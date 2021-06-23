/** @format */

exports.actions = (name, choices) => {
  const nameActionTypeUpper = name.toUpperCase();
  const nameActionTypeLowewr = name.charAt(0).toUpperCase() + name.slice(1);

  return `
//#region ::: IMPORT
import {
  ${choices
    .map(
      (operation) =>
        `AT_${nameActionTypeUpper}_${operation.toUpperCase()}_REQUEST, \n`
    )
    .join("")}} from './constants';

// #region ::: ${nameActionTypeUpper}
${choices
  .map(
    (operation) =>
      `export const action${nameActionTypeLowewr}${operation}Request = (payload: any) => ({
  type: AT_${nameActionTypeUpper}_${operation.toUpperCase()}_REQUEST,
  payload,
  }); \n \n  `
  )
  .join("")}
// #endregion
`;
};
