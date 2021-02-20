import React from 'react'

import {Switch, Route} from "react-router-dom";
import Dashboard from "../pages/dashBoard/index";
import RecoveryPass from "../pages/recoveryPass/index";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/" component={RecoveryPass}/>
        </Switch>
    )
}

export default Routes
