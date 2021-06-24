"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = void 0;
var splitStringUtility_1 = require("./splitStringUtility");
var actions = function (name) {
    var names = splitStringUtility_1.splitString(name);
    var nameOperationTypeUpper = names[0].toUpperCase();
    var nameOperationTypeLower = names[0].charAt(0).toUpperCase() + names[0].slice(1);
    var nameActionTypeUpper = names[1].toUpperCase();
    var nameActionTypeLowewr = names[1].charAt(0).toUpperCase() + names[1].slice(1);
    return "\n//#region ::: IMPORT\nimport {\n  AT_" + nameActionTypeUpper + "_" + nameOperationTypeUpper + "_REQUEST,\n  AT_" + nameActionTypeUpper + "_" + nameOperationTypeUpper + "_SUCCESS,\n  AT_" + nameActionTypeUpper + "_" + nameOperationTypeUpper + "_FAILURE,\n  } from './constants';\n\n  // #region ::: " + nameOperationTypeUpper + "\n  export const action" + nameActionTypeLowewr + nameOperationTypeLower + "Request = (payload: any) => ({\n    type: AT_" + nameActionTypeUpper + "_" + nameOperationTypeUpper + "_REQUEST,\n    payload,\n  });\n  \n  export const action" + nameActionTypeLowewr + nameOperationTypeLower + "Success = (payload: any) => ({\n    type: AT_" + nameActionTypeUpper + "_" + nameOperationTypeUpper + "_SUCCESS,\n    payload,\n  });\n  \n  export const action" + nameActionTypeLowewr + nameOperationTypeLower + "Failure = (payload: any) => ({\n    type: AT_" + nameActionTypeUpper + "_" + nameOperationTypeUpper + "_FAILURE,\n    payload,\n  });\n  // #endregion\n";
};
exports.actions = actions;
//# sourceMappingURL=actions.js.map