/** @format */

import { memo, FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface Props {
  path: string;
  component: FC<any>;
  exact?: boolean;
  selector: (store: any) => boolean;
  redirectTo: string;
}

export const RouteGuest: FC<Props> = memo(
  ({ component: Component, path, exact, redirectTo, selector }): JSX.Element => {
    const isAuthenticated = useSelector(selector);

    return (
      <Route
        exact={exact}
        path={path}
        render={(props): JSX.Element => (!isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />)}
      />
    );
  },
);
RouteGuest.displayName = 'RouteGuest';
