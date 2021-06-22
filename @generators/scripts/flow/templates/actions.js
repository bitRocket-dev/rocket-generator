/** @format */

const { splitString } = require("./splitStringUtility");

exports.actions = (name) => {
  const names = splitString(name);
  const nameOperationTypeUpper = names[0].toUpperCase();
  const nameOperationTypeLower =
    names[0].charAt(0).toUpperCase() + names[0].slice(1);
  const nameActionTypeUpper = names[1].toUpperCase();
  const nameActionTypeLowewr =
    names[1].charAt(0).toUpperCase() + names[1].slice(1);

  return `
//#region ::: IMPORT
import {
  AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_REQUEST,
  AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_SUCCESS,
  AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_FAILURE,
  } from './constants';

  // #region ::: ${nameOperationTypeUpper}
  export const action${nameActionTypeLowewr}${nameOperationTypeLower}Request = (payload: any) => ({
    type: AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_REQUEST,
    payload,
  });
  
  export const action${nameActionTypeLowewr}${nameOperationTypeLower}Success = (payload: any) => ({
    type: AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_SUCCESS,
    payload,
  });
  
  export const action${nameActionTypeLowewr}${nameOperationTypeLower}Failure = (payload: any) => ({
    type: AT_${nameActionTypeUpper}_${nameOperationTypeUpper}_FAILURE,
    payload,
  });
  // #endregion
`;
};
