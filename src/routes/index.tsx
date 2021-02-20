import React from 'react'

import {Switch, Route} from "react-router-dom";
import Dashboard from "../pages/dashBoard";
import Home from "../pages/home";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}

export default Routes
