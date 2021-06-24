"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwIfError = exports.execAsync = exports.utilityCapitalizeFirst = void 0;
var child_process_1 = require("child_process");
var utilityCapitalizeFirst = function (string) { return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1); };
exports.utilityCapitalizeFirst = utilityCapitalizeFirst;
var execAsync = function (command, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        return child_process_1.exec(command, options, function (err, stdout, stderr) {
            if (err)
                return reject(err);
            return resolve(stdout);
        });
    });
};
exports.execAsync = execAsync;
var throwIfError = function (err) {
    if (err)
        throw err;
};
exports.throwIfError = throwIfError;
//# sourceMappingURL=utilities.js.map