import React, { Component } from 'react';
import axios from 'axios';

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

    getAccessToken(){
        return localStorage.getItem('token');
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:5000/recipes', {headers: {Authorization: this.getAccessToken()}})
        .then(response => {
            this.setState({recipe_array: response.data});
        })
        .catch(error => {
            alert('failed to load edit recipes: ' + error);
        })

        axios.get('http://127.0.0.1:5000/categories', {headers: {Authorization: this.getAccessToken()}})
        .then(response => {
            this.setState({category_array: response.data});
        })
        .catch(error => {
            alert('failed to load edit recipes categories' + error);
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
        axios.put(`http://127.0.0.1:5000/recipes/${this.state.recipe_id}`, {
            category_id: this.state.category_id,
            name: this.state.name,
            details: this.state.details,
            ingredients: this.state.ingredients
        },
        {headers: {Authorization: this.getAccessToken()}})
        .then(response => {
            alert('Success');
            window.location.reload();
        })
        .catch(error => {
            alert(error)
        })
    }

    render(){
        if(this.state.recipe_array && this.state.category_array){
            const select_category_array = this.state.category_array.map((category) => {
                return(
                    <option value={category.id} key={category.id}>{category.name}</option>
                );
            })

            const select_recipe_array = this.state.recipe_array.map((recipe) => {
                return(
                    <option value={recipe.id} key={recipe.id}>{recipe.name}</option>
                );
            });

            return(
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Edit Recipe</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit} >
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>                                        
                                    <select className="form-control" name="edit_recipe" onChange={this.handleRecipeChanged} value={this.state.recipe_id} required>
                                        <option value={0}>SELECT RECIPE TO EDIT</option>
                                        { select_recipe_array }
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>                                        
                                    <select className="form-control" name="new_category" onChange={this.handleCategoryChanged} value={this.state.category_id} required>
                                        <option value={0}>SELECT CATEGORY</option>
                                        { select_category_array }
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                    <input type="text" name="recipe_name" placeholder="RECIPE NAME" className="form-control" id="recipe_name"
                                    onChange={this.handleRecipeNameChanged}
                                    required />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list-alt"></i></span>
                                    <textarea type="text" name="new_description" placeholder="RECIPE DESCRIPTION" className="form-control"
                                    onChange={this.handleRecipeDetailsChanged}
                                    required></textarea>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-glass"></i></span>
                                    <textarea type="text" name="new_ingredients" placeholder="RECIPE INGREDIENTS" className="form-control"
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
            )
        } else {
            return(
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">YUMMY RECIPES: Edit Recipe</h4>
                    </div>
                    <div className="modal-body">
                        <form >
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>                                        
                                <select className="form-control" name="edit_recipe" required>
                                    <option value="">SELECT RECIPE TO EDIT</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>                                        
                                <select className="form-control" name="new_category" required>
                                    <option value="">SELECT CATEGORY</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                <input type="text" name="recipe_name" placeholder="RECIPE NAME" className="form-control" id="recipe_name"
                                required />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-list-alt"></i></span>
                                <textarea type="text" name="new_description" placeholder="RECIPE DESCRIPTION" className="form-control"
                                required></textarea>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-glass"></i></span>
                                <textarea type="text" name="new_ingredients" placeholder="RECIPE INGREDIENTS" className="form-control"
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
            );
        }
    }
}

export default EditRecipe;