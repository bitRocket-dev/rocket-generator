"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scriptImport = void 0;
var fs_extra_1 = require("fs-extra");
var scriptImport = function (name, choices) {
    var dir = "./src/@sdk/redux-modules/" + name + "/actions.tsx";
    var nameActionTypeUpper = name.toUpperCase();
    var content = [];
    var chomap = choices.map(function (item, index) {
        if (fs_extra_1.readFileSync(dir).toString().includes("  AT_" + nameActionTypeUpper + "_" + item.toUpperCase() + ","))
            console.log('Import alredy exist');
        else
            content.push("  AT_" + nameActionTypeUpper + "_" + item.toUpperCase() + ",");
        return content[index];
    });
    return chomap;
};
exports.scriptImport = scriptImport;
//# sourceMappingURL=scriptImport.js.map