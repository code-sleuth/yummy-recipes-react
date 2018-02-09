import React, { Component } from 'react';
import axios from 'axios';
import {BASE_URL, AuthToken} from '../../utils/Constants'; 
import Navbar from '../common/Navbar';
class EditRecipe extends Component{
    constructor(){
        super();
        this.state = {
            category_array: [],
            recipe_array: [],
            recipe_id: '',
            category_id: '',
            name: '',
            details: '',
            ingredients: ''
        }
    }

    // life cycle function that sets the default state of the component
    componentDidMount(){
        axios.get(`${BASE_URL}recipes/${this.getId()}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({recipe_array: response.data});
        })
        .catch(error => {
            alert('failed to load edit recipes: ' + error);
        })
    }

    // function to handle recipe input changed
    handleRecipeChanged = (event) => {
        this.setState({recipe_id: event.target.value});
    }

    // function to handle category input changed
    handleCategoryChanged = (event) => {
        this.setState({category_id: event.target.value});
    }

    // function to handle recipe name input changed
    handleRecipeNameChanged = (event) => {
        this.setState({name: event.target.value});
    }

    // function to handle recipe detail input changed
    handleRecipeDetailsChanged = (event) => {
        this.setState({details: event.target.value});
    }

    // function to handle recipe ingredients input changed
    handleRecipeIngredientsChanged = (event) => {
        this.setState({ingredients: event.target.value});
    }

    // function to handle user submitted data
    handleSubmit = (event) => {
        event.preventDefault();
        const {category_id, name, details, ingredients} = this.state
        axios.put(`${BASE_URL}recipes/${this.getId()}`, {
            category_id: category_id,
            name: name,
            details: details,
            ingredients: ingredients
        },
        {headers: {Authorization: AuthToken}})
        .then(response => {
            alert('Success');
            window.location.reload();
        })
        .catch(error => {
            alert(error)
        })
    }

    // function to get category id from url
    getId(){
        return this.props.match.params.id
    }

    // function to handle jsx
    render(){
        const {recipe_array} = this.state;
            return(
                <div>
                    <Navbar />
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Edit Recipe</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit} >
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                    <input type="text" placeholder={"OLD RECIPE NAME: "+recipe_array.name} className="form-control" id="recipe_name"
                                    onChange={this.handleRecipeNameChanged}
                                    required />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list-alt"></i></span>
                                    <textarea type="text" name="new_description" placeholder={"OLD DETAILS: "+recipe_array.details} className="form-control"
                                    onChange={this.handleRecipeDetailsChanged}
                                    required></textarea>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-glass"></i></span>
                                    <textarea type="text" name="new_ingredients" placeholder={"OLD INGREDIENTS: "+recipe_array.ingredients} className="form-control"
                                    onChange={this.handleRecipeIngredientsChanged}
                                    required></textarea>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-info btn-md" type="submit" name="updaterecipe" value="UPDATE RECIPE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default EditRecipe;