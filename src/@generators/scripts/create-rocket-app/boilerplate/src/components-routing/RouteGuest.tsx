/** @format */

import { memo, FC } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorIsAuthenticated } from '../@sdk/redux-modules/auth/selector';
import { RouteRedirect } from './RouteRedirect';
import { TRoute } from '../@sdk/declarations/routes';

interface Props {
  path: TRoute;
  component: FC<any>;
  exact?: boolean;
}

export const RouteGuest: FC<Props> = memo(({ component: Component, path, exact }): JSX.Element => {
  const isAuthenticated = useSelector(selectorIsAuthenticated);

  return (
    <Route
      exact={exact}
      path={path}
      render={(props): JSX.Element => (!isAuthenticated ? <Component {...props} /> : <RouteRedirect to="/" />)}
    />
  );
});
RouteGuest.displayName = 'RouteGuest';
