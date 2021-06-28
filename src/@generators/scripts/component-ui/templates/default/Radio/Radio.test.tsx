/** @format */

import { UIRadioButton } from '.';
import { mount } from '@cypress/react';
import { cyGet } from '../../../cypress/support/commands';
import { Providers } from '../Providers';

it('renders UIRadioButton', () => {
  mount(
    <Providers>
      <UIRadioButton checked onChange={() => {}} />
    </Providers>,
  );
  cyGet('UIRadioButton');
});
