/** @format */

export const component = name => `
import { FC } from "react";

export interface Props {}

export const View${name} :FC<Props> = ({}): JSX.Element => {
  return <div data-cy='view-${name}'>View${name}</div>;
};
`;

export const test = name => `
import { View${name} } from '.';
import { mount } from '@cypress/react'
import { cyGet } from "../../../cypress/support/commands";

it('renders learn react link', () => {
  mount(<View${name} />)
  cyGet('view-${name}').contains('View${name}')
})
`;

export const gitkeep = () => ``;
