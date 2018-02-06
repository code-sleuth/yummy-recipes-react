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

    componentDidMount(){
        axios.get(`${BASE_URL}recipes/${this.getId()}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({recipe_array: response.data});
        })
        .catch(error => {
            alert('failed to load edit recipes: ' + error);
        })
    }

    handleRecipeChanged = (event) => {
        this.setState({recipe_id: event.target.value});
    }

    handleCategoryChanged = (event) => {
        this.setState({category_id: event.target.value});
    }

    handleRecipeNameChanged = (event) => {
        this.setState({name: event.target.value});
    }

    handleRecipeDetailsChanged = (event) => {
        this.setState({details: event.target.value});
    }

    handleRecipeIngredientsChanged = (event) => {
        this.setState({ingredients: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${BASE_URL}recipes/${this.getId()}`, {
            category_id: this.state.category_id,
            name: this.state.name,
            details: this.state.details,
            ingredients: this.state.ingredients
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

    getId(){
        return this.props.match.params.id
    }

    render(){
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
                                    <input type="text" placeholder={"OLD RECIPE NAME: "+this.state.recipe_array.name} className="form-control" id="recipe_name"
                                    onChange={this.handleRecipeNameChanged}
                                    required />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list-alt"></i></span>
                                    <textarea type="text" name="new_description" placeholder={"OLD DETAILS: "+this.state.recipe_array.details} className="form-control"
                                    onChange={this.handleRecipeDetailsChanged}
                                    required></textarea>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-glass"></i></span>
                                    <textarea type="text" name="new_ingredients" placeholder={"OLD INGREDIENTS: "+this.state.recipe_array.ingredients} className="form-control"
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