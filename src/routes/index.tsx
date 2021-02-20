import React from 'react'

import {Switch, Route} from "react-router-dom";

import Dashboard from "../pages/dashBoard";
import Login from '../pages/login';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}

export default Routes
