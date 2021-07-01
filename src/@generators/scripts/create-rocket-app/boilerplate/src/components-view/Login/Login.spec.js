/** @format */

import { ViewLogin } from '.';
import { mount } from '@cypress/react';
import { cyGet } from '../../../cypress/support/commands';

it('renders learn react link', () => {
  mount(<ViewLogin />);
  cyGet('view-Login').contains('ViewLogin');
});
