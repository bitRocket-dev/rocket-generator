/** @format */

exports.actions = name => {
  const nameAction = name.charAt(0).toUpperCase() + name.slice(1);
  const nameActionType = name.toUpperCase();

  return `
    // #region ::: IMPORT
  import {
    AT_${nameActionType}_DELETE_REQUEST,
    AT_${nameActionType}_DELETE_SUCCESS,
    AT_${nameActionType}_DELETE_FAILURE,
    AT_${nameActionType}_DETAIL_REQUEST,
    AT_${nameActionType}_DETAIL_SUCCESS,
    AT_${nameActionType}_DETAIL_FAILURE,
    AT_${nameActionType}_LIST_REQUEST,
    AT_${nameActionType}_LIST_SUCCESS,
    AT_${nameActionType}_LIST_FAILURE,
    AT_${nameActionType}_CREATE_REQUEST,
    AT_${nameActionType}_CREATE_SUCCESS,
    AT_${nameActionType}_CREATE_FAILURE,
    AT_${nameActionType}_UPDATE_REQUEST,
    AT_${nameActionType}_UPDATE_SUCCESS,
    AT_${nameActionType}_UPDATE_FAILURE,
  } from './constants';
  // #endregion
  
  // #region ::: LIST
  export const action${nameAction}ListRequest = (payload: any) => ({
    type: AT_${nameActionType}_LIST_REQUEST,
    payload,
  });
  
  export const action${nameAction}ListSucces = (payload: any) => ({
    type: AT_${nameActionType}_LIST_SUCCESS,
    payload,
  });
  
  export const action${nameAction}ListFailure = (error: Error) => ({
    type: AT_${nameActionType}_LIST_FAILURE,
    payload: error,
  });
  // #endregion
  
  // #region ::: DETAIL
  export const action${nameAction}DetailRequest = (payload: any) => ({
    type: AT_${nameActionType}_DETAIL_REQUEST,
    payload,
  });
  
  export const action${nameAction}DetailSuccess = (payload: any) => ({
    type: AT_${nameActionType}_DETAIL_SUCCESS,
    payload,
  });
  
  export const action${nameAction}DetailFailure = (error: Error) => ({
    type: AT_${nameActionType}_DETAIL_FAILURE,
    payload: error,
  });
  // #endregion
  
  // #region ::: CREATE
  export const action${nameAction}CreateRequest = (payload: any) => ({
    type: AT_${nameActionType}_CREATE_REQUEST,
    payload,
  });
  
  export const action${nameAction}CreateSuccess = (payload: any) => ({
    type: AT_${nameActionType}_CREATE_SUCCESS,
    payload,
  });
  
  export const action${nameAction}CreateFailure = (error: Error) => ({
    type: AT_${nameActionType}_CREATE_FAILURE,
    payload: error,
  });
  // #endregion
  
  // #region ::: UPDATE
  export const action${nameAction}UpdateRequest = (payload: any) => ({
    type: AT_${nameActionType}_UPDATE_REQUEST,
    payload,
  });
  
  export const action${nameAction}UpdateSucces = (payload: any) => ({
    type: AT_${nameActionType}_UPDATE_SUCCESS,
    payload,
  });
  
  export const action${nameAction}UpdateFailure = (error: Error) => ({
    type: AT_${nameActionType}_UPDATE_FAILURE,
    payload: error,
  });
  // #endregion
  
  // #region ::: DELETE
  export const action${nameAction}DeleteRequest = (payload: any) => ({
    type: AT_${nameActionType}_DELETE_REQUEST,
    payload,
  });
  
  export const action${nameAction}DeleteSuccess = (payload: any) => ({
    type: AT_${nameActionType}_DELETE_SUCCESS,
    payload,
  });
  
  export const action${nameAction}DeleteFailure = (error: Error) => ({
    type: AT_${nameActionType}_DELETE_FAILURE,
    payload: error,
  });
  // #endregion
  `;
};
