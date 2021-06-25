"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduxSyncFlow = void 0;
var fs_extra_1 = require("fs-extra");
var scriptImport_1 = require("./scriptImport");
var scriptBody_1 = require("./scriptBody");
var actions_1 = require("./templates/actions");
var constants_1 = require("./templates/constants");
var declarations_1 = require("./templates/declarations");
var reducers_1 = require("./templates/reducers");
var reduxSyncFlow = function (name, choices, reducer) { return __awaiter(void 0, void 0, void 0, function () {
    function writeFileErrorHandler(err) {
        if (err)
            throw err;
    }
    var dir, dir2, data_1, str;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dir = "./src/@sdk/redux-modules/" + name;
                dir2 = "./src/@sdk/redux-modules/" + name + "/actions.tsx";
                return [4, fs_extra_1.pathExists(dir2)];
            case 1:
                if (!_a.sent()) return [3, 4];
                return [4, scriptBody_1.scriptBody(name, choices)];
            case 2:
                _a.sent();
                data_1 = fs_extra_1.readFileSync(dir2).toString().split('\n');
                return [4, scriptImport_1.scriptImport(name, choices)];
            case 3:
                str = _a.sent();
                console.log(str);
                if (!str.includes(undefined)) {
                    str.map(function (item) {
                        data_1.splice(3, 0, item);
                        var text = data_1.join('\n');
                        fs_extra_1.writeFile("" + dir2, text, function (err) {
                            if (err)
                                return console.log(err);
                        });
                    });
                }
                return [3, 6];
            case 4: return [4, fs_extra_1.mkdirs(dir)];
            case 5:
                _a.sent();
                fs_extra_1.writeFile(dir + "/actions.tsx", actions_1.actions(name, choices), writeFileErrorHandler);
                _a.label = 6;
            case 6:
                fs_extra_1.writeFile(dir + "/constants.tsx", constants_1.constants(name, choices), writeFileErrorHandler);
                fs_extra_1.writeFile(dir + "/declarations.tsx", declarations_1.declarations(name), writeFileErrorHandler);
                if (reducer === 'yes') {
                    fs_extra_1.writeFile(dir + "/reducers.tsx", reducers_1.reducers(name, choices), writeFileErrorHandler);
                }
                return [2];
        }
    });
}); };
exports.reduxSyncFlow = reduxSyncFlow;
//# sourceMappingURL=index.js.map