"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.story = exports.component = void 0;
var component = function (name) { return "\nimport { FC } from \"react\";\n\nexport interface Props {}\n\nexport const UI" + name + " :FC<Props> = ({}): JSX.Element => {\n  return <div data-cy='ui-" + name + "'>UI" + name + "</div>;\n};\n"; };
exports.component = component;
var story = function (name) { return "\nimport { UI" + name + ", Props } from './';\nimport { Story, Meta } from '@storybook/react/types-6-0';\nimport { Providers } from '../Providers';\n\nexport default {\n  title: 'Example/" + name + "',\n  component: UI" + name + ",\n  argTypes: {\n    backgroundColor: { control: 'color' },\n  },\n} as Meta;\n\nconst Template: Story<Props> = props => (\n  <Providers>\n    <UI" + name + " {...props} />\n  </Providers>\n);\n\nexport const Default = Template.bind({});\n\nDefault.args = {};\n"; };
exports.story = story;
var test = function (name) { return "\nimport { UI" + name + " } from '.';\nimport { mount } from '@cypress/react'\nimport { cyGet } from \"../../../cypress/support/commands\";\n\nit('renders learn react link', () => {\n  mount(<UI" + name + " />)\n  cyGet('ui-" + name + "')\n})\n"; };
exports.test = test;
//# sourceMappingURL=new-template.js.map