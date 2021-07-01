/** @format */

import { ViewHome } from '.';
import { mount } from '@cypress/react';
import { cyGet } from '../../../cypress/support/commands';

it('renders learn react link', () => {
  mount(<ViewHome />);
  cyGet('view-Home').contains('ViewHome');
});
