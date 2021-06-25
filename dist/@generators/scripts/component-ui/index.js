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
exports.componentUi = void 0;
var fs_extra_1 = require("fs-extra");
var new_template_1 = require("./new-template");
var utilities_1 = require("../../utilities");
var componentUi = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    function foo(formattedName) {
        switch (formattedName) {
            case 'Button':
                dirPlus = "./src/components-ui/Icon";
                localDirPlus = __dirname + "/templates/Icon";
                break;
            case 'Datepicker':
                dirPlus = ["./src/components-ui/Text", "./src/components-ui/Input"];
                localDirPlus = [__dirname + "/templates/Text", __dirname + "/templates/Input"];
                break;
            case 'Input':
                dirPlus = [
                    "./src/components-ui/Text",
                    "./src/components-ui/Icon",
                    "./src/components-ui/Grid",
                    "./src/@sdk/utils/validate",
                    "./src/@sdk/hooks/useInput.ts",
                ];
                localDirPlus = [
                    __dirname + "/templates/Text",
                    __dirname + "/templates/Icon",
                    __dirname + "/templates/Grid",
                    __dirname + "/utils/utility/validate",
                    __dirname + "/utils/utility/useInput.ts",
                ];
                break;
            case 'Select':
                dirPlus = "./src/components-ui/Text";
                localDirPlus = __dirname + "/templates/Text";
                break;
            case 'Tabs':
                dirPlus = ["./src/components-ui/Text", "./src/components-ui/Grid"];
                localDirPlus = [__dirname + "/templates/Text", __dirname + "/templates/Grid"];
                break;
            case 'TimePicker':
                dirPlus = ["./src/components-ui/Text", "./src/components-ui/Input"];
                localDirPlus = [__dirname + "/templates/Text", __dirname + "/templates/Input"];
                break;
            case 'Avatar':
                dirPlus = "./src/components-ui/Text";
                localDirPlus = __dirname + "/templates/Text";
                break;
            case 'Image':
                dirPlus = "./src/components-ui/Loader";
                localDirPlus = __dirname + "/templates/Loader";
                break;
            case 'NavigateTo':
                dirPlus = "./src/@sdk/hooks/useNavigation.ts";
                localDirPlus = __dirname + "/utils/utility/useNavigation.ts";
                break;
            case 'Modal':
                dirPlus = "./src/components-ui/Icon";
                localDirPlus = __dirname + "/templates/Icon";
                break;
            default:
                break;
        }
    }
    var themePath, providerPath, localThemeDir, localProvidersDir, formattedName, dir, localDir, path, dirPlus, localDirPlus;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                themePath = './src/components-ui/@theme';
                providerPath = './src/components-ui/Providers.tsx';
                localThemeDir = __dirname + "/utils/@theme";
                localProvidersDir = __dirname + "/utils/Providers.tsx";
                formattedName = utilities_1.utilityCapitalizeFirst(name);
                dir = "./src/components-ui/" + formattedName;
                localDir = __dirname + "/templates/" + formattedName;
                path = "./src/components-ui/.gitkeep";
                if (!formattedName) return [3, 2];
                foo(formattedName);
                return [4, fs_extra_1.pathExists(dirPlus)];
            case 1:
                if (_a.sent())
                    console.error("\u001B[31m", "A component " + formattedName + " already exists.");
                if (formattedName === 'Datepicker' || formattedName === 'TimePicker') {
                    fs_extra_1.pathExistsSync("./src/components-ui/Input")
                        ? foo('Input')
                        : fs_extra_1.copy(__dirname + "/templates/Input", "./src/components-ui/Input") && foo('Input');
                }
                if (localDirPlus instanceof Array) {
                    localDirPlus.map(function (item, index) { return fs_extra_1.copy(item, dirPlus[index]).catch(function () { }); });
                }
                else
                    fs_extra_1.copy(localDirPlus, dirPlus).catch(function () { });
                _a.label = 2;
            case 2:
                if (fs_extra_1.pathExistsSync(path)) {
                    fs_extra_1.unlinkSync(path);
                }
                if (!fs_extra_1.existsSync(themePath)) {
                    fs_extra_1.copy(localThemeDir, themePath).catch(function () { });
                    fs_extra_1.copy(localProvidersDir, providerPath).catch(function () { });
                }
                if (!name)
                    throw new Error('You must include a component name.');
                return [4, fs_extra_1.pathExists(dir)];
            case 3:
                if (_a.sent())
                    console.error("\u001B[31m", "A component " + formattedName + " already exists.");
                return [4, fs_extra_1.pathExists(localDir)];
            case 4:
                if (_a.sent())
                    return [2, fs_extra_1.copy(localDir, dir).catch(function () { })];
                return [4, fs_extra_1.mkdirs(dir)];
            case 5:
                _a.sent();
                fs_extra_1.writeFile(dir + "/" + formattedName + ".stories.tsx", new_template_1.story(formattedName), utilities_1.throwIfError);
                fs_extra_1.writeFile(dir + "/" + formattedName + ".test.tsx", new_template_1.test(formattedName), utilities_1.throwIfError);
                fs_extra_1.writeFile(dir + "/index.tsx", new_template_1.component(formattedName), utilities_1.throwIfError);
                return [4, utilities_1.execAsync("npm install styled-components", { cwd: dir })];
            case 6:
                _a.sent();
                return [2];
        }
    });
}); };
exports.componentUi = componentUi;
//# sourceMappingURL=index.js.map