/** @format */

import { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { RouteLogged } from './components-routing/RouteLogged';
import { RouteGuest } from './components-routing/RouteGuest';
import { ViewHome } from './components-view/ViewHome';
import { ViewLogin } from './components-view/ViewLogin';

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteGuest path="/login" component={ViewLogin} />
        <RouteLogged exact path="/" component={ViewHome} />
      </Switch>
    </BrowserRouter>
  );
};
