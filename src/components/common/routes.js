import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginPage from '../login/Login'; 
import Dashboard from './Dashboard';
import SignupPage from '../login/Signup';
import Homepage from './Homepage';
import Category from '../categories/Category';
import Recipe from '../recipes/Recipe';
import User from '../user/User';

const Routes = () =>(
    <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login"  component={LoginPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup"  component={SignupPage} />
            <Route exact path="/dashboard/categories" component={Category} /> 
            <Route exact path="/dashboard/recipes" component={Recipe} />
            <Route exact path="/dashboard/user" component={User} />
        </Switch>
    </div>
);

export default Routes;