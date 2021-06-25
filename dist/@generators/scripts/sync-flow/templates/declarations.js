"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarations = void 0;
var declarations = function (name) {
    var formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    return "\n  export interface T" + formattedName + " {}\n  ";
};
exports.declarations = declarations;
//# sourceMappingURL=declarations.js.map