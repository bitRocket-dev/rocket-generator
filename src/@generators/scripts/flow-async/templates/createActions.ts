/** @format */

export const createActions = (name: string, operation: string): string => {
  const nameOperationTypeUpper = operation.toUpperCase();
  const nameOperationTypeLower = operation.charAt(0).toUpperCase() + operation.slice(1);
  const nameActionTypeUpper = name.toUpperCase();
  const nameActionTypeLowewr = name.charAt(0).toUpperCase() + name.slice(1);

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
