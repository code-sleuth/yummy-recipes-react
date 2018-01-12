import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginPage from '../login/Login'; 
import Homepage from '../Homepage';

const Routes = () =>(
    <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    </div>
);

export default Routes;