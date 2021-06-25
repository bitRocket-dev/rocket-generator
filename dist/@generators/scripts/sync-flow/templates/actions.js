"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = void 0;
var actions = function (name, choices) {
    var nameActionTypeUpper = name.toUpperCase();
    var nameActionTypeLowewr = name.charAt(0).toUpperCase() + name.slice(1);
    return "\n  // prettier-ignore\nimport {\n  " + choices
        .map(function (operation) { return "AT_" + nameActionTypeUpper + "_" + operation.toUpperCase() + ",\n"; })
        .join("") + "} from './constants';\n\n" + choices
        .map(function (operation) {
        return "export const action" + nameActionTypeLowewr + operation + " = (payload: any) => ({\n  type: AT_" + nameActionTypeUpper + "_" + operation.toUpperCase() + ",\n  payload,\n  });\r";
    })
        .join("") + "\n";
};
exports.actions = actions;
//# sourceMappingURL=actions.js.map