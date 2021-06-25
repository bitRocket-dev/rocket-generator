"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scriptBody = void 0;
var fs_extra_1 = require("fs-extra");
var utilities_1 = require("../../utilities");
var scriptBody = function (name, choices) {
    var dir = "./src/@sdk/redux-modules/" + name + "/actions.tsx";
    var formattedName = utilities_1.utilityCapitalizeFirst(name);
    choices.map(function (item) {
        if (!fs_extra_1.readFileSync(dir).toString().includes("action" + formattedName + item)) {
            fs_extra_1.appendFileSync(dir, "export const action" + formattedName + item + "= (payload: any) => ({\n  type: AT_" + name.toUpperCase() + "_" + item.toUpperCase() + ",\n  payload,\n        });\r");
        }
        else
            return console.log('body alredy exist');
    });
};
exports.scriptBody = scriptBody;
//# sourceMappingURL=scriptBody.js.map