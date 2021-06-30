/** @format */

import { memo, FC } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { selectorIsAuthenticated } from '../@sdk/redux-modules/auth/selector';
import { RouteRedirect } from './RouteRedirect';

interface Props {
  path: string;
  component: FC<any>;
  exact?: boolean;
}

export const RouteLogged: FC<Props> = memo(({ component: Component, path, exact }): JSX.Element => {
  const isAuthenticated = useSelector(selectorIsAuthenticated);

  return (
    <Route
      exact={exact}
      path={path}
      render={(props): JSX.Element => (isAuthenticated ? <Component {...props} /> : <RouteRedirect to="/login" />)}
    />
  );
});
RouteLogged.displayName = 'RouteLogged';
