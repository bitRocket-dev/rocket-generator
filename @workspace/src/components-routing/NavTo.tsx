/** @format */

import { FC } from 'react';
import { NavLink } from 'react-router-dom';
interface Props {
  to: string;
}

export const NavTo: FC<Props> = ({ children, to }): JSX.Element => (
  <NavLink to={to} style={{ width: '100%' }}>
    {children}
  </NavLink>
);
