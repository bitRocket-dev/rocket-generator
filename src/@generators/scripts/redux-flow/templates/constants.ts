/** @format */

exports.constants = name => {
  const nameActionType = name.toUpperCase();
  const nameActionLog = name.charAt(0).toUpperCase() + name.slice(1);

  return `
    export const AT_${nameActionType}_CREATE_REQUEST = '[Action] - ${nameActionLog} Create Request';
    export const AT_${nameActionType}_CREATE_SUCCESS = '[Event] - ${nameActionLog} Create Success';
    export const AT_${nameActionType}_CREATE_FAILURE = '[Event] - ${nameActionLog} Create Failure';
    
    export const AT_${nameActionType}_DELETE_REQUEST = '[Action] - ${nameActionLog} Delete Request';
    export const AT_${nameActionType}_DELETE_SUCCESS = '[Event] - ${nameActionLog} Delete Success';
    export const AT_${nameActionType}_DELETE_FAILURE = '[Event] - ${nameActionLog} Delete Failure';
    
    export const AT_${nameActionType}_DETAIL_REQUEST = '[Action] - ${nameActionLog} Detail Request';
    export const AT_${nameActionType}_DETAIL_SUCCESS = '[Event] - ${nameActionLog} Detail Success';
    export const AT_${nameActionType}_DETAIL_FAILURE = '[Event] - ${nameActionLog} Detail Failure';
    
    export const AT_${nameActionType}_LIST_REQUEST = '[Action] - ${nameActionLog} List Request';
    export const AT_${nameActionType}_LIST_SUCCESS = '[Event] - ${nameActionLog} List Success';
    export const AT_${nameActionType}_LIST_FAILURE = '[Event] - ${nameActionLog} List Failure';
    
    export const AT_${nameActionType}_UPDATE_REQUEST = '[Action] - ${nameActionLog} Update Request';
    export const AT_${nameActionType}_UPDATE_SUCCESS = '[Event] - ${nameActionLog} Update Success';
    export const AT_${nameActionType}_UPDATE_FAILURE = '[Event] - ${nameActionLog} Update Failure';
    `;
};
