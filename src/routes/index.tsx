import React from 'react'

import {Switch, Route} from "react-router-dom";
import Dashboard from "../pages/dashBoard";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}

export default Routes
