/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';

const mapRoutes = section => routes.map(route => (
  <Route
    path={route.path}
    component={route[section]}
    exact={route.exact}
    key={route.path}
  />
));

export default function App() {
  return (
    <MuiThemeProvider>
      <div>
        <div>
          <Switch>
            {mapRoutes('header')}
          </Switch>
        </div>
        <div>
          <Switch>
            {mapRoutes('main')}
          </Switch>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
