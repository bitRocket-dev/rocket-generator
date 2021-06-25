"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = void 0;
var constants = function (name, choices) {
    var nameActionType = name.toUpperCase();
    var nameActionLog = name.charAt(0).toUpperCase() + name.slice(1);
    return "\n  " + choices
        .map(function (operation) {
        return "export const AT_" + nameActionType + "_" + operation.toUpperCase() + " = '[Action] - " + nameActionLog + " " + (operation.charAt(0).toUpperCase() + operation.slice(1)) + "';\n";
    })
        .join("") + "\n  ";
};
exports.constants = constants;
//# sourceMappingURL=constants.js.map