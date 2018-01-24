import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import AddRecipe from './AddRecipe';
import DeleteRecipe from './DeleteRecipe';
import EditRecipe from './EditRecipe';

class Recipe extends Component{
    render(){
        return(
            <div>
                <Navbar />

                {/* ADD RECIPE */ }
                <AddRecipe />

                {/* EDIT RECIPE */}
                <EditRecipe />

                {/* DELETE RECIPE */}
                <DeleteRecipe />
            </div>
        );
    }
}

export default Recipe;