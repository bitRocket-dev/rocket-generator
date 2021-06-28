/** @format */

import React, { memo, FC } from 'react';
import { Redirect, Route } from 'react-router-dom';

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

interface Props {
  path: string;
  component: FC<any>;
  exact?: boolean;
  strict?: boolean;
  redirectTo: string;
}

export const RouteDev: FC<Props> = memo(
  ({ component: Component, path, exact, strict, redirectTo }: Props): JSX.Element => (
    <Route
      exact={exact}
      strict={strict}
      path={path}
      render={(props): JSX.Element => (IS_DEVELOPMENT ? <Component {...props} /> : <Redirect to={redirectTo} />)}
    />
  ),
);
RouteDev.displayName = 'RouteDev';
