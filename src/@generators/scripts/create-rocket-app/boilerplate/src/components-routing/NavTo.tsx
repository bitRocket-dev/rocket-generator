/** @format */

import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { TRoute } from '../@sdk/declarations/routes';
interface Props {
  to: TRoute;
}

export const NavTo: FC<Props> = ({ children, to }): JSX.Element => (
  <NavLink to={to} style={{ width: '100%' }}>
    {children}
  </NavLink>
);
