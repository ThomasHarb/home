import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import {
  Main as MainLayout,
} from './layouts';

// Landing pages
import {
  Home as HomeView,
} from './views/landingPages';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path= { process.env.PUBLIC_URL + "/" }
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
