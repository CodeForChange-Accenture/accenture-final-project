import React from "react";

import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./privateRoute";

import Dashboard from "../pages/dashBoard";
import RecoveryPass from "../pages/recoveryPass/index";
import Error from "../pages/error";
import Home from "../pages/home";
import Login from "../pages/login";

const Routes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/recoveryPass" component={RecoveryPass} />
      <Route path="/" exact component={Home} />
      <Route path="/error" component={Error} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
