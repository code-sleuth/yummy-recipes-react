import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginPage from '../login/Login'; 
import Dashboard from './Dashboard';
// import Homepage from '../Homepage';

const Routes = () =>(
    <div>
        <Switch>
            {/* <Route exact path="/" component={Homepage} /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </div>
);

export default Routes;