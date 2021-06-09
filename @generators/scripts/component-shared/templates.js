/** @format */

exports.component = name => `
import { FC } from "react";

export interface Props {}

export const ${name} :FC<Props> = ({}): JSX.Element => {
  return <div>${name}</div>;
};
`;

exports.story = name => `
import { ${name}, Props } from './';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../../Providers';

export default {
  title: 'Example/${name}',
  component: ${name},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story<Props> = props => (
  <Providers>
    <${name} {...props} />
  </Providers>
);

export const Default = Template.bind({});

Default.args = {};
`;
