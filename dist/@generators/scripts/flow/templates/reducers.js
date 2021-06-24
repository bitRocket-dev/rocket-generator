"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
var splitStringUtility_1 = require("./splitStringUtility");
var reducers = function (name) {
    var names = splitStringUtility_1.splitString(name);
    var formattedName = names[1].charAt(0).toUpperCase() + names[1].slice(1);
    return "\nimport { TStore } from \"../../../declarations/store\";\nimport { TAction } from \"../../../declarations/actions\";\n\nexport const reducer" + formattedName + " = (\n  prevStore: TStore['" + names[1] + "'] = {},\n  action: TAction,\n): TStore['" + names[1] + "'] => {\n  switch (action.type) {\n    default:\n      break;\n  }\n  return prevStore;\n};";
};
exports.reducers = reducers;
//# sourceMappingURL=reducers.js.map