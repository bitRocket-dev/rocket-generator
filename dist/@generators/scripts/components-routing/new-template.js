"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.component = void 0;
var component = function (name) { return "\nimport { memo, FC } from 'react';\nimport { Route } from 'react-router-dom';\n\ninterface Props {\n  path: string;\n  component: FC<any>;\n  exact?: boolean; \n}\n\nexport const Route" + name + ": FC<Props> = memo(({ component: Component, path, exact }): JSX.Element => {\n  return <Route exact={exact} path={path} render={(props): JSX.Element => <Component {...props} />} />;\n});\nRoute" + name + ".displayName = 'Route" + name + "';\n"; };
exports.component = component;
//# sourceMappingURL=new-template.js.map