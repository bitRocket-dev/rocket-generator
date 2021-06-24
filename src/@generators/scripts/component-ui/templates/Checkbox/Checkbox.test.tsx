/** @format */

import { UICheckbox } from '.';
import { mount } from '@cypress/react';
import { cyGet } from '../../../cypress/support/commands';
import { Providers } from '../Providers';

it('renders UICheckbox', () => {
  mount(
    <Providers>
      <UICheckbox title="" checked onChange={() => {}} />
    </Providers>,
  );
  cyGet('UICheckbox');
});
