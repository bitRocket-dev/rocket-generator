/** @format */

import { Redirect } from 'react-router-dom';
import { FC } from 'react';

interface Props {
  to: string;
}
export const RouteRedirect: FC<Props> = ({ to }): JSX.Element => <Redirect to={to} />;
