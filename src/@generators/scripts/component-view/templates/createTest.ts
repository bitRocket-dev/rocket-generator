/** @format */

export const createTest = (name: string): string => `
import { View${name} } from '.';
import { mount } from '@cypress/react'
import { cyGet } from "../../../cypress/support/commands";

it('renders learn react link', () => {
  mount(<View${name} />)
  cyGet('view-${name}').contains('View${name}')
})
`;
