"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarations = void 0;
var splitStringUtility_1 = require("./splitStringUtility");
var declarations = function (name) {
    var names = splitStringUtility_1.splitString(name);
    var formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);
    return "\n  export interface T" + formattedName + " {}\n  ";
};
exports.declarations = declarations;
//# sourceMappingURL=declarations.js.map