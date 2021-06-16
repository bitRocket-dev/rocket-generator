/** @format */

import { FC, memo } from 'react';
import { ProviderRedux } from './@sdk/redux-modules/Provider';
import { ProviderTheme } from './components-ui/@theme/Provider';

interface Props {
  children: JSX.Element;
}

export const Providers: FC<Props> = memo(
  ({ children }): JSX.Element => (
    <ProviderRedux>
      <ProviderTheme>{children}</ProviderTheme>
    </ProviderRedux>
  ),
);
