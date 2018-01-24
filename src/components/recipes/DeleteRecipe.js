import React, { Component } from 'react';
import axios from 'axios';

class DeleteRecipe extends Component{
    constructor(){
        super();
        this.state = {
            recipe_array: [],
            recipe_id: ''
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
            alert('Load recipe: ' + error);
        })
    }

    handleSelectChanged = (event) => {
        this.setState({recipe_id: event.target.value});
    }

    handleReload(){
        this.setState();
        window.location.reload();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        axios.delete(`http://127.0.0.1:5000/recipes/${this.state.recipe_id}`, {headers: {Authorization: this.getAccessToken()}})
        .then(response => {
            alert('Recipe Deleted');
            this.handleReload();
        })
        .catch(error => {
            alert('Delete recipe error: ' + error);
        })
    }

    render(){
        if(this.state.recipe_array){
            const delete_recipe_array = this.state.recipe_array.map((recipe) => {
                return(
                    <option value={recipe.id} key={recipe.id}>{recipe.name}</option>
                );
            });

            return(
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Delete Recipe</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleFormSubmit}>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                    <select className="form-control" name="recipe" onChange={this.handleSelectChanged} value={this.state.recipe_id} required>
                                        <option value={0}>SELECT RECIPE TO DELETE</option>
                                        { delete_recipe_array }
                                    </select>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-danger btn-md" type="submit" name="deleterecipe" value="DELETE RECIPE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Delete Recipe</h4>
                        </div>
                        <div className="modal-body">
                            <form action="/delete_recipe" method="POST">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                    <select className="form-control" name="recipe" onChange={this.handleSelectChanged} value={this.state.recipe_id} required>
                                        <option value="">SELECT RECIPE TO DELETE</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-danger btn-md" type="submit" name="deleterecipe" value="DELETE RECIPE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default DeleteRecipe;