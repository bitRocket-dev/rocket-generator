/** @format */

export const component = name => `
import { FC } from "react";

export interface Props {}

export const UI${name} :FC<Props> = ({}): JSX.Element => {
  return <div data-cy='ui-${name}'>UI${name}</div>;
};
`;

export const story = name => `
import { UI${name}, Props } from './';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Providers } from '../Providers';

export default {
  title: 'Example/${name}',
  component: UI${name},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = props => (
  <Providers>
    <UI${name} {...props} />
  </Providers>
);

export const Default = Template.bind({});

Default.args = {};
`;

export const test = name => `
import { UI${name} } from '.';
import { mount } from '@cypress/react'
import { cyGet } from "../../../cypress/support/commands";

it('renders learn react link', () => {
  mount(<UI${name} />)
  cyGet('ui-${name}')
})
`;
