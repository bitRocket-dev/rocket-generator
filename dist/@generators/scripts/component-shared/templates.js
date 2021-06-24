"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.story = exports.component = void 0;
var component = function (name) { return "\nimport { FC } from \"react\";\n\nexport interface Props {}\n\nexport const " + name + " :FC<Props> = ({}): JSX.Element => {\n  return <div>" + name + "</div>;\n};\n"; };
exports.component = component;
var story = function (name) { return "\nimport { " + name + ", Props } from './';\nimport { Story, Meta } from '@storybook/react/types-6-0';\nimport { Providers } from '../../Providers';\n\nexport default {\n  title: 'Example/" + name + "',\n  component: " + name + ",\n  argTypes: {\n    backgroundColor: { control: 'color' },\n  },\n} as Meta;\n\n\nconst Template: Story<Props> = props => (\n  <Providers>\n    <" + name + " {...props} />\n  </Providers>\n);\n\nexport const Default = Template.bind({});\n\nDefault.args = {};\n"; };
exports.story = story;
//# sourceMappingURL=templates.js.map