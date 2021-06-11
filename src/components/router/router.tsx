import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Appbar from 'components/appbar';
import Home from 'components/home';
import { Route as UsRoute } from 'components/router/utils';


function HomeComponent() {
  return (
    <React.Fragment>
      <Appbar />
      <Home />
    </React.Fragment>
  );
}


function Router(): JSX.Element {
  const getHome = React.useCallback(() => HomeComponent(), []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={UsRoute.Home}
          render={getHome}
        />
      </Switch>
    </BrowserRouter>
  );
}


export default Router;
