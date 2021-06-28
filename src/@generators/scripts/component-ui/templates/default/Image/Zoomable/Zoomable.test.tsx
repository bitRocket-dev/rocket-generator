/** @format */

import { ImageZoomable } from '.';
import { mount } from '@cypress/react';
import { cyGet } from '../../../../cypress/support/commands';
import { Providers } from '../../Providers';

it('renders ImageZoomable', () => {
  const picture = {
    path: 'https://images.techhive.com/images/article/2016/10/firefox-logo-100690302-large.jpg',
    fileExtension: 'jpg',
  };

  mount(
    <Providers>
      <ImageZoomable picture={picture} variant="medium" />
    </Providers>,
  );
  cyGet('ImageZoomable');
});
