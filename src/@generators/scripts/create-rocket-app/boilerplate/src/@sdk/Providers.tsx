/** @format */

import { FC, memo } from 'react';
import { ProviderTheme } from './@theme/Provider';
import { ProviderRedux } from './redux-modules/Provider';

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
