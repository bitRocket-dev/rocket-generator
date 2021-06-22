/** @format */

const { splitString } = require("./splitStringUtility");

exports.actions = (name) => {
  const names = splitString(name);
  const nameOperationTypeUpper = names[1].toUpperCase();
  const nameOperationTypeLower =
    names[1].charAt(0).toUpperCase() + names[1].slice(1);
  const nameActionTypeUpper = names[0].toUpperCase();
  const nameActionTypeLowewr =
    names[0].charAt(0).toUpperCase() + names[0].slice(1);

  return `
//#region ::: IMPORT
import {
  AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_REQUEST,
  } from './constants';

  // #region ::: ${nameOperationTypeUpper}
  export const action${nameActionTypeLowewr}${nameOperationTypeLower}Request = (payload: any) => ({
    type: AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_REQUEST,
    payload,
  });

  // #endregion
`;
};
