"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
var reducers = function (name, choices) {
    var formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    return "\nimport { TStore } from \"../../../declarations/store\";\nimport { TAction } from \"../../../declarations/actions\";\n\nexport const reducer" + formattedName + " = (\n  prevStore: TStore['" + name + "'] = {},\n  action: TAction,\n): TStore['" + name + "'] => {\n  switch (action.type) {\n    " + choices.map(function (operation) { return "case \"" + operation + "\":\n"; }).join("") + "\n    default:\n      break;\n  }\n  return prevStore;\n};";
};
exports.reducers = reducers;
//# sourceMappingURL=reducers.js.map