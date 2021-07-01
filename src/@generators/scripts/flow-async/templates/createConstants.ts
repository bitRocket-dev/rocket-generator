/** @format */

export const createConstants = (name: string, operation): string => {
  const nameActionOperationType = operation.toUpperCase();
  const nameActionOperationLog = operation.charAt(0).toUpperCase() + operation.slice(1);
  const nameActionType = name.toUpperCase();
  const nameActionLog = name.charAt(0).toUpperCase() + name.slice(1);

  return `
export const AT_${nameActionType}_${nameActionOperationType}_REQUEST = '[Action] - ${nameActionLog} ${nameActionOperationLog} Request';
export const AT_${nameActionType}_${nameActionOperationType}_SUCCESS = '[Event] - ${nameActionLog} ${nameActionOperationLog} Success';
export const AT_${nameActionType}_${nameActionOperationType}_FAILURE = '[Event] - ${nameActionLog} ${nameActionOperationLog} Failure';  
  `;
};
