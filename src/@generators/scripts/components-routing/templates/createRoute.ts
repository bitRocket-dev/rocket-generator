/** @format */

export const createRoute = (name: string): string => `
import { memo, FC } from 'react';
import { Route } from 'react-router-dom';

interface Props {
  path: string;
  component: FC<any>;
  exact?: boolean; 
}

export const Route${name}: FC<Props> = memo(({ component: Component, path, exact }): JSX.Element => {
  return <Route exact={exact} path={path} render={(props): JSX.Element => <Component {...props} />} />;
});
Route${name}.displayName = 'Route${name}';
`;
