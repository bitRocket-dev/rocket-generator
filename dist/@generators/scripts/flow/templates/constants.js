"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = void 0;
var splitStringUtility_1 = require("./splitStringUtility");
var constants = function (name) {
    var names = splitStringUtility_1.splitString(name);
    var nameActionOperationType = names[0].toUpperCase();
    var nameActionOperationLog = names[0].charAt(0).toUpperCase() + names[0].slice(1);
    var nameActionType = names[1].toUpperCase();
    var nameActionLog = names[1].charAt(0).toUpperCase() + names[1].slice(1);
    return "\nexport const AT_" + nameActionType + "_" + nameActionOperationType + "_REQUEST = '[Action] - " + nameActionLog + " " + nameActionOperationLog + " Request';\nexport const AT_" + nameActionType + "_" + nameActionOperationType + "_SUCCESS = '[Event] - " + nameActionLog + " " + nameActionOperationLog + " Success';\nexport const AT_" + nameActionType + "_" + nameActionOperationType + "_FAILURE = '[Event] - " + nameActionLog + " " + nameActionOperationLog + " Failure';  \n  ";
};
exports.constants = constants;
//# sourceMappingURL=constants.js.map