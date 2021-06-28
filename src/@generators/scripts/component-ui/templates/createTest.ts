/** @format */

export const createTest = name => `
import { UI${name} } from '.';
import { mount } from '@cypress/react'
import { cyGet } from "../../../cypress/support/commands";

it('renders learn react link', () => {
  mount(<UI${name} />)
  cyGet('ui-${name}')
})
`;
