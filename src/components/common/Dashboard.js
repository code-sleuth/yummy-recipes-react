import React, { Component } from 'react';
import Navbar from './Navbar';
import Recipes from '../recipes/Recipes';

class Dashboard extends Component {

    render(){
        return(
            <div>
                <Navbar />
                <Recipes />
            </div>
        );
    }
}

export default Dashboard;