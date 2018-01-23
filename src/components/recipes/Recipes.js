import React, {Component}  from 'react';
import axios from 'axios';
import RecipeImage from '../../styles/assets/recipe.jpg';

class Recipes extends Component {
    constructor(){
        super();
        this.state = {
            recipes: [

            ]
        }
    }


    componentDidMount(){
        axios.get('http://127.0.0.1:5000/recipes', {headers: {Authorization: this.getAuthenticationToken()}})
        .then(response => {
            console.log(this.getAuthenticationToken())
            console.log(response.data)
            this.setState({recipes: response.data})
        })
        .catch(error => {
            console.log(error)
            if (error){
                this.handleError();
            }
        });
    }

    getAuthenticationToken(){
        return localStorage.getItem('token');
    }

    handleError(){
        localStorage.removeItem('token')
        window.location.reload();
    }

    render(){
        console.log(this.state.recipes)
        if (this.state.recipes){
        const rec_ipes = this.state.recipes.map((recipes) => {
            return(
                <tbody>
                <tr>
                    <td>{recipes.category_id}</td>
                    <td>{recipes.name}</td>
                    <td>{recipes.details}</td>
                    <td>{recipes.ingredients}</td>
                    <td>{recipes.date_created}</td>
                    <td>{recipes.date_modified}</td>
                </tr>
                </tbody>
            );
        });

        return(
            <div class="container">
                <h2>Recipes</h2>
                <p>A list of all created Recipes</p>                              
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Recipe Name</th>
                        <th>Details</th>
                        <th>Ingredients</th>
                        <th>Date Created</th>
                        <th>Last Edited</th>
                    </tr>
                    </thead>
                    { rec_ipes }
                </table>
            </div>
        );
    }
    }
}

export default Recipes;