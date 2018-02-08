import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginForm from '../login/LoginForm'; 
import Dashboard from './Dashboard';
import SignupPage from '../login/Signup';
import Category from '../categories/Category';
import User from '../user/User';
import PrivateRoute from '../../utils/PrivateRoute';
import EditCategory from '../categories/EditCategory';
import AddCategory from '../categories/AddCategory';
import EditRecipe from '../recipes/EditRecipe';
import AddRecipe from '../recipes/AddRecipe';

const Routes = () =>(
    <div>
        <Switch>
            {/* <Route exact path="/" component={Homepage} /> */}
            <Route exact path="/login"  component={LoginForm} />
            <Route exact path="/signup"  component={SignupPage} />
            <PrivateRoute path="/recipe/:id" component={Dashboard} />
            <PrivateRoute path="/add_recipe/:id" component={AddRecipe} />
            <PrivateRoute path="/edit_recipe/:id" component={EditRecipe} />
            <PrivateRoute path="/categories" component={Category} /> 
            <PrivateRoute path="/edit_categories/:id" component={EditCategory} /> 
            <PrivateRoute exact path="/add_categories" component={AddCategory} /> 
            <PrivateRoute exact path="/user" component={User} />
        </Switch>
    </div>
);

export default Routes;