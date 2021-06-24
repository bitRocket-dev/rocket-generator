/** @format */

import { mount } from '@cypress/react';
import { cyGet } from '../../../../cypress/support/commands';
import { Providers } from '../../Providers';
import { UIImageBackground } from './ImageBackground';

it('renders UIImageBackground', () => {
  mount(
    <Providers>
      <UIImageBackground srcImage="" />
    </Providers>,
  );
  cyGet('UIImageBackground');
});
