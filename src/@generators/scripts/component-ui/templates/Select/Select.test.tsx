/** @format */

import { UISelect } from '.';
import { mount } from '@cypress/react';
import { cyGet } from '../../../cypress/support/commands';
import { Providers } from '../Providers';

it('renders UISelect', () => {
  mount(
    <Providers>
      <UISelect onChange={() => {}} options={[options]} />
    </Providers>,
  );
  cyGet('UISelect');
});
