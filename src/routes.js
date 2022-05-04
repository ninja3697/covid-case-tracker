import React, { lazy } from "react";
import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";
const DashboardView = lazy(() => import("./views/dashboard/dashboard.view"));

const Routes = () => {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route exact path="/" element={<DashboardView />} />
      </BrowserRoutes>
    </BrowserRouter>
  );
};

export default Routes;
