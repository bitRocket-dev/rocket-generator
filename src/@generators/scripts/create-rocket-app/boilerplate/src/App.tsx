/** @format */

import { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { RouteGuest } from './components-routing/RouteGuest';
import { RouteLogged } from './components-routing/RouteLogged';
import { ViewHome } from './components-view/ViewHome';
import { ViewLogin } from './components-view/ViewLogin';

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteLogged exact path="/" component={ViewHome} />
        <RouteGuest path="/login" component={ViewLogin} />
      </Switch>
    </BrowserRouter>
  );
};
