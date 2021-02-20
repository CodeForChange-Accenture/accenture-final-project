import React from "react";

import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import RecoveryPass from "../pages/recoveryPass/index";
import Error from "../pages/error/index";
import Home from "../pages/home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/recoveryPass" component={RecoveryPass} />
      <Route path="/" component={Home} />
      <Route path="/error" component={Error} />
    </Switch>
  );
};

export default Routes;
