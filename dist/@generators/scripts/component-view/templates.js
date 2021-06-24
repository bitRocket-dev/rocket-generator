"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitkeep = exports.test = exports.component = void 0;
var component = function (name) { return "\nimport { FC } from \"react\";\n\nexport interface Props {}\n\nexport const View" + name + " :FC<Props> = ({}): JSX.Element => {\n  return <div data-cy='view-" + name + "'>View" + name + "</div>;\n};\n"; };
exports.component = component;
var test = function (name) { return "\nimport { View" + name + " } from '.';\nimport { mount } from '@cypress/react'\nimport { cyGet } from \"../../../cypress/support/commands\";\n\nit('renders learn react link', () => {\n  mount(<View" + name + " />)\n  cyGet('view-" + name + "').contains('View" + name + "')\n})\n"; };
exports.test = test;
var gitkeep = function () { return ""; };
exports.gitkeep = gitkeep;
//# sourceMappingURL=templates.js.map