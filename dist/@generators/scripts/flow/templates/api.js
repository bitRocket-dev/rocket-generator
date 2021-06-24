"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
var splitStringUtility_1 = require("./splitStringUtility");
var api = function (name) {
    var names = splitStringUtility_1.splitString(name);
    var formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);
    var formattedOperation = names[0].charAt(0).toUpperCase() + names[0].slice(1);
    var handleOperation = function (operation) {
        switch (operation) {
            case 'Create':
                return "       \nexport const api" + formattedName + "Create = async (params: any): Promise<any> => {\n  const result = await fetch.post('placeholder/create', { ...params });\n  return result;\n};";
            case 'Delete':
                return "\nexport const api" + formattedName + "Delete = async (params: any): Promise<any> => {\n  const result = await fetch.delete('placeholder/delete');\n  return result;\n};";
            case 'Update':
                return "\nexport const api" + formattedName + "Update = async (params: any): Promise<any> => {\n  const result = await fetch.put('placeholder/update', { ...params });\n  return result;\n};";
            case 'List':
                return "\nexport const api" + formattedName + "List = async (): Promise<any> => {\n  const result = await fetch.get('placeholder/list');\n  return result;\n};";
            case 'Detail':
                return " \nexport const api" + formattedName + "Detail = async (params: any): Promise<any> => {\n  const result = await fetch.get('placeholder/detail');\n  return result;\n};";
            default:
                break;
        }
    };
    return "\nimport { fetch } from '../../../utils/fetch';\n" + handleOperation(formattedOperation);
};
exports.api = api;
//# sourceMappingURL=api.js.map