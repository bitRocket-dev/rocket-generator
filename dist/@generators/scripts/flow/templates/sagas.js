"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sagas = void 0;
var splitStringUtility_1 = require("./splitStringUtility");
var sagas = function (name) {
    var names = splitStringUtility_1.splitString(name);
    var formattedOperation = names[0].charAt(0).toUpperCase() + names[0].slice(1);
    var formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);
    return "\nimport { call, put } from 'redux-saga/effects';\nimport {\n  api" + formattedName + formattedOperation + ",\n} from \"./api\";\nimport {\n  action" + formattedName + formattedOperation + "Failure,\n  action" + formattedName + formattedOperation + "Request,\n  action" + formattedName + formattedOperation + "Success,\n} from './actions';\n\nexport function* saga" + formattedName + formattedOperation + "(action: ReturnType<typeof action" + formattedName + formattedOperation + "Request>): Generator {\n  try {\n    const payload: any = yield call(api" + formattedName + formattedOperation + ", action.payload);\n    yield put(action" + formattedName + formattedOperation + "Success(payload));\n  } \n  catch (error) {\n    yield put(action" + formattedName + formattedOperation + "Failure(error));\n  }\n}";
};
exports.sagas = sagas;
//# sourceMappingURL=sagas.js.map