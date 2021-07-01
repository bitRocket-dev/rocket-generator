/** @format */

import { memo, FC } from 'react';
import { Route } from 'react-router-dom';
import { TRoute } from '../@sdk/declarations/routes';

interface Props {
  path: TRoute;
  component: FC<any>;
  exact?: boolean;
}

export const RoutePublic: FC<Props> = memo(({ component: Component, path, exact }): JSX.Element => {
  return <Route exact={exact} path={path} render={(props): JSX.Element => <Component {...props} />} />;
});
RoutePublic.displayName = 'RoutePublic';
